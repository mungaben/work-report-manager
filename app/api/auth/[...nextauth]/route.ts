
import { prisma } from "@/components/Prisma/Prisma";
import * as bcrypt from "bcryptjs";
// 

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";



interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [

    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "Email", type: "email", placeholder: "ncwsc@example.com" },
        password: { label: "Password", type: "password" }

      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied


        if (!credentials?.email || !credentials.password) {
          // console.log("no user credentials");

          throw new Error('Please enter an email and password')
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });
        user && await prisma.activity.create({
          data: {
            authorId: user?.id,
            content: "user logged in/signup",
          }
        })

        // console.log("user from db ", user);


        // if no user was found 
        if (!user || !user?.password) {
          throw new Error('No user found')
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(credentials.password, user.password)

        // if password does not match
        if (!passwordMatch) {
          throw new Error('Incorrect password')
        }
        //  console.log("user from authentication next", user);

        return user;
      },

    }),







  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",

    // signOut: "/auth/signout",
  },
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the user's JWT in the token response
      if (user) {
        token.id = user.id;

        token.email = user.email;
        token.sub = user.id;
        token.name = user.name;
        token.randomKey = "Hey cool";

      }
      // localStorage.setItem("token", JSON.stringify(token));
      // console.log("token", token);

      return token;
    },
    async session({ session, token, user }: { session: any; token: any; user: any; }) {
      // Re-use the session across requests

      if (session?.user) {
        return{
          ...session,
          user: {
            ...session.user,
            id: token.sub,
          }
        }
      }
      // console.log("session data", session, token, user);

      return session;
    },
  },

};




const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
