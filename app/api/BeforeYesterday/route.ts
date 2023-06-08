// import { prisma } from "../../../components/Prisma/Prisma";
import { prisma } from "@/config/prisma"
import { NextRequest, NextResponse } from "next/server"




// get all activities GET   where date is yesterday excluding weekends in report table with prisma
export async function GET(req: NextRequest, res: NextResponse) {
  const date = new Date();
  console.log(date.toLocaleString());

  const yesterday = new Date(date.setDate(date.getDate() - 1));
  const beforeYesterday = new Date(yesterday);
  beforeYesterday.setDate(beforeYesterday.getDate() - 1);

  console.log("yesterday", yesterday.toLocaleString());
  console.log("beforeYesterday", beforeYesterday,beforeYesterday.toLocaleString());


  // const weekends = [0, 6];

  // const weekendDates = weekends.map((day) => {
  //   const dateCopy = new Date(yesterday);
  //   dateCopy.setDate(yesterday.getDate() + day);
  //   return dateCopy;
  // });
  const year = 2023;
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);

  const weekends = [0, 6];
  const weekendDates = [];

  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    if (weekends.includes(currentDate.getDay())) {
      weekendDates.push(new Date(currentDate));
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

   
console.log("lt",new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate()).toLocaleString(),);
console.log("gte",new Date(beforeYesterday.getFullYear(), beforeYesterday.getMonth(), beforeYesterday.getDate()).toLocaleString(),);


  console.log(weekendDates);

  const data = await prisma.report.findMany({
    where: {
       createdAt: {
        // gte: yesterday,
        gte: new Date(beforeYesterday.getFullYear(), beforeYesterday.getMonth(), beforeYesterday.getDate()),
        lt: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate()),

        // lte: yesterday,
        // notIn: weekendDates,
      },
    },
    include: {
      author: true
       
      }
  });



  return NextResponse.json(data);
}




