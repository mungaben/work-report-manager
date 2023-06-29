// import axios from "axios";
// import { useCallback } from "react";

// import { useReportStore } from "@/app/utils/Stores/Report";




// import { ReportTypes } from "@/app/utils/Types/Mytypes";





// const url = "http://localhost:3000/api/Reports"









// // fetch data using url api
// export const DataAvailable = async () => {
//   await fetch(url).then((res) => {
//     // console.log("this is res.jsons",res.json());

//     return res.json()
//   }).then((data: ReportTypes[]) => {
//     // console.log("data available in acativity data",data)
//     const yesterdays = data.filter((item) => {
//       const dateinfull = new Date(item.createdAt).getDate() === new Date().getDate()


//       console.log("dateinfull day is it equal", dateinfull);
//       // dateinfull && setSelectedDtae((prev)=>[...prev,item])


//       dateinfull && console.log("dateinfull", item);

//       if (dateinfull) {
//         return item;

//       }

//     })
//   })
// }
// let Dataavail = []



// export const DataAvailableprevious = async () => {
//   const { setReport, report } = useReportStore();
//   try {
//     // const response = await axios.get(url);
//     // const data = response.data;


//     const yesterdays = report.filter((item: ReportTypes) => {
//       if (new Date(item.createdAt).getDate() === new Date().getDate() - 1) {
//         return item;
//       }

//     });

//     console.log("Data available in activity data last", yesterdays);
//     return yesterdays;
//   } catch (error) {
//     // console.error("Error retrieving data:", error);
//     return "error while getting data of previous day";
//   }
// };
