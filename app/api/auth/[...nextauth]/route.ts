
import { prisma } from "@/components/Prisma/Prisma";
import { compare } from "bcryptjs";
import * as bcrypt from "bcryptjs";
// 

import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";



interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Sign in",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "example@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) {
//           return null;
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         });

//         if (!user || !(await compare(credentials.password, user.password))) {
//           return null;
//         }

//         return {
//           id: user.id,
//           email: user.email,
//           name: user.name,
//           randomKey: "Hey cool",
//         };
//       },
//     }),
//   ],
// };



// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST }



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

        // const res = await fetch("http://localhost:3000/api/Login", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     name: credentials?.username,
        //     email: credentials?.email,
        //     password: credentials?.password
        //   }),
        //   headers: {
        //     "Content-Type": "application/json"
        //   }
        // })
        // // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        // const user = await res.json()


        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   console.log("user",user);

        //   return user
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }

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
          data:{
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
    // error: "/auth/error",
  },
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
        session.user.id = token.sub;
      }
      // console.log("session data", session, token, user);

      return session;
    },
  },

};




const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }