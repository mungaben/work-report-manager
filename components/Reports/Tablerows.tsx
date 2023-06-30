// "use client";

// import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
// import { applications } from "../Dashoboard/AnalyticCards";
// import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
// import toast, { Toaster } from "react-hot-toast";
// const timeData = [
//   "7:00 AM",
//   "8:00 AM",
//   "9:00 PM",
//   "10:00 AM",
//   "11:00 AM",
//   " 12:00 PM",
//   "13:00PM",
//   "14:00 PM",
//   "15:00 PM",
//   "16:00 PM",
// ];
// type MyDataType = {
//   targetValue(targetValue: any): unknown;
//   targetvalue(targetvalue: any): unknown;
//   targetname: any;
//   id: string;
//   from: string | Date;
//   to: string | Date;
//   Basis2: number | string;
//   Interface: number | string;
//   CMS: number | string;
//   SPMS: number | string;
//   NEWPERPAY: number | string;
//   OLDPERPAY: number | string;
//   UTILITYMASTER: number | string;
//   INTERNET: number | string;
//   EXCHANGEBROWSERMAIL: number | string;
//   COMMENTS: string;

//   // ExchangeBrowserMail:number
// };
// type table2def = {
//   targetname: string;
// };

// // import { applications } from './FakeData';

// import { data } from "autoprefixer";
// import { set } from "react-hook-form";
// import { log } from "console";

// const Tablerows = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<FieldValues>();
//   // const datas = useMemo(() => generateFakeData, []);
//   console.log("data generated", generateFakeData);
//   const [datasav, setdatasav] = useState<MyDataType[]>([]);
//   // console.log("datasav", datasav);
//   const [timedatas, settimedatas] = useState(timeData);

//   const [settime, setsettime] = useState("");
//   const [BASIS2, setBASIS2] = useState();
//   const [INTERFACE, setInterface] = useState();
//   const [CMS, setCMS] = useState();
//   const [SPMS, setSPM] = useState();
//   const [NewPREPAY, setNewPREPAY] = useState();
//   const [OLDPERPAY, setOLDPERPAY] = useState();
//   const [INTERNET, setINTERNET] = useState();
//   const [ExchangeBrowser, setExchangeBrowser] = useState();
//   const [Comments, setComments] = useState();
//   const SavedData = localStorage.getItem("saveData");
//   const [disablebtn, setdisablebtn] = useState(false);
//   const [ChagedValue, setChagedValue] = useState<number | undefined>();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log("handleInputChange", e.target.value);
//     const datachange = Number(e.target.value);
//     setChagedValue(datachange);
//     const disabled = e.target.disabled;
//     console.log("disabl;ed", disabled);

//     // get index of row to edit
//     const index = datasav?.findIndex((data) => data.id === e.target.id);
//     console.log("index to change", index);

//     console.log("target name", e.target.name);
//     const targetName: string = e.target.name;
//     console.log("target name", targetName);
//     // const dataToUpdate={...datasav[index], [targetName]: e.target.value}
//     // console.log("dataToUpdate", dataToUpdate);
//     const dataUpdate = {
//       ...datasav[index],
//       [targetName]: Number(e.target.value),
//     };
//     console.log("index", index);

//     console.log("dataUpdate", dataUpdate);
//     setdatasav(
//       datasav.map((data) => {
//         if (data.id === e.target.id) {
//           const dataUPatethis = {
//             ...data,
//             [e.target.name]: Number(e.target.value),
//           };
//           console.log("dataUPatethis", dataUPatethis);
//           // SAVE to local storage
//           localStorage.setItem("saveData", JSON.stringify(dataUPatethis));
//           // upadted data this
//           return dataUPatethis;
//         }
//         //    if data updated does not march /simply cant return this
//         return data;
//       })
//     );
//     console.log("datasav changed", datasav);
//   };

//   // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//   //     const lableEvent = event.currentTarget.value;
//   //     console.log("handleClick", lableEvent);

//   // }

//   const handleSave: (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => void = () => {
//     console.log("save", event);
//   };

//   const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();

//     const value: string = event.currentTarget.value;
//     const id = event.currentTarget.id;
//     console.log("id", id);

//     console.log("edit", value);
//     // get index
//     const index = datasav?.findIndex((data) => data.id === id);

//     //  add the index data to datasav
//     const updatedData = { ...datasav[index] };

//     // add updated data to datasav
//     const dataToUpdate = { ...(datasav[index] = updatedData) };
//   };
//   const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();

//     const value = event.currentTarget.value;
//     const id = event.currentTarget.id;

//     const datasavcopy = [...datasav];

//     // get index
//     const indextr = datasav?.findIndex((data) => data.id === id);
//     console.log("indextr", indextr);
//     if (indextr >= 0) {
//       // Filter data by index value
//       const filteredTime = timedatas.filter((data, index) => index !== indextr);
//       const indexedData = datasav.filter(
//         (data, index) => data.id !== id,
//         console.log("filteredTime", data)
//       );

//       console.log("filteredTime", filteredTime);
//       console.log("indexedData", indexedData);

//       // Update state variables with the filtered arrays
//       settimedatas(filteredTime);
//       setdatasav(indexedData);
//     }

//     // console.log("datasav data provi", datasav.length);
//   };
//   const handleDisabled = () => {
//     // console.log("handleDisabled", e.target.value);
//     return true;
//   };
//   const handleComments = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     console.log("handleInputChange", e.target.value);
//     setsettime(e.target.value);
//     // get index of row to edit
//     const index = datasav?.findIndex((data) => data.id === e.target.id);
//     console.log("index to change", index);

//     console.log("target name", e.target.name);
//     const targetName: string = e.target.name;
//     console.log("target name", targetName);
//     // const dataToUpdate={...datasav[index], [targetName]: e.target.value}
//     // console.log("dataToUpdate", dataToUpdate);
//     const dataUpdate = { ...datasav[index], [targetName]: e.target.value };
//     console.log("index", index);

//     console.log("dataUpdate", dataUpdate);
//     setdatasav(
//       datasav.map((data) => {
//         if (data.id === e.target.id) {
//           const dataUPatethis = { ...data, [e.target.name]: e.target.value };
//           console.log("dataUPatethis", dataUPatethis);
//           // SAVE to local storage
//           localStorage.setItem("saveData", JSON.stringify(dataUPatethis));
//           // upadted data this
//           return dataUPatethis;
//         }
//         //    if data updated does not march /simply cant return this
//         return data;
//       })
//     );
//     console.log("datasav changed", datasav);
//   };
//   const popError = () => {
//     <Toaster />;
//     return false;
//   };
//   useEffect(() => {}, [timedatas, datasav]);

//   return (
//     <div className=" transition">
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <form action="" method="post">
//           <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr className=" ">
//                 <th scope="col" className="p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-all-search"
//                       type="checkbox"
//                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                     />
//                     <label htmlFor="checkbox-all-search" className="sr-only">
//                       checkbox
//                     </label>
//                   </div>
//                 </th>

//                 {applications.map((app, index) => (
//                   <React.Fragment key={index}>
//                     <th scope="col" className="px-6 py-3 text-[#333333]">
//                       {app}
//                     </th>
//                   </React.Fragment>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {timedatas.map((data, index) => (
//                 <tr
//                   key={index}
//                   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200/70 dark:hover:bg-gray-600"
//                 >
//                   <td className="w-4 p-4">
//                     <div className="flex items-center ">
//                       <input
//                         id="checkbox-table-search-1"
//                         type="checkbox"
//                         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                       />
//                       <label
//                         htmlFor="checkbox-table-search-1"
//                         className="sr-only"
//                       >
//                         checkbox
//                       </label>
//                     </div>
//                   </td>
//                   <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
//                     <button className="outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none">
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
//                         <input
//                           disabled={true}
//                           type="text"
//                           name="id"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           value={index + 1}
//                           placeholder={String(datasav[index].id) || undefined}
//                           required
//                           className=" outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none"
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button className="outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none">
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
//                         <input
//                           disabled={true}
//                           type="text"
//                           name="from"
//                           id={String(datasav[index].id) || undefined}
//                           value={data}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           placeholder={
//                             String(datasav[index].to.toLocaleString) ||
//                             undefined
//                           }
//                           required
//                           className=" outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none"
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button className="outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none">
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
//                         <input
//                           disabled={true}
//                           type="text"
//                           name="to"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           value={
//                             index > 5
//                               ? index + 8 + ": 00 PM"
//                               : index + 8 + ": 00 AM"
//                           }
//                           placeholder={String(datasav[index].from) || undefined}
//                           required
//                           className=" outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none"
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button className="outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none">
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
//                         <input
//                           disabled={
//                             ChagedValue && ChagedValue > 5 ? true : popError()
//                           }
//                           type="number"
//                           name="Basis2"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           placeholder={
//                             String(datasav[index].Basis2) || undefined
//                           }
//                           required
//                           onChange={handleInputChange}
//                           className=" outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none"
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button>
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
//                         <input
//                           type="number"
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           name="interface"
//                           id={String(datasav[index].id) || undefined}
//                           onChange={handleInputChange}
//                           placeholder={
//                             String(datasav[index].Interface) || undefined
//                           }
//                           required
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button>
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
//                         <input
//                           type="number"
//                           name="CMS"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           onChange={handleInputChange}
//                           placeholder={String(datasav[index].CMS) || undefined}
//                           required
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td
//                     className="px-6 py-4 font-medium text-gray-900 whitespace-E3                                                                                                                                                                                                                                             first-letter:first-line:
//                                     nowrap dark:text-white"
//                   >
//                     <button>
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
//                         <input
//                           type="number"
//                           name="SPMS"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           onChange={handleInputChange}
//                           placeholder={String(datasav[index].SPMS) || undefined}
//                           required
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button>
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
//                         <input
//                           type="number"
//                           name="NEWPERPAY"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           onChange={handleInputChange}
//                           placeholder={
//                             String(datasav[index].NEWPERPAY) || undefined
//                           }
//                           required
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button>
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
//                         <input
//                           type="number"
//                           name="OLDPERPAY"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           onChange={handleInputChange}
//                           placeholder={
//                             String(datasav[index].OLDPERPAY) || undefined
//                           }
//                           required
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button>
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
//                         <input
//                           type="number"
//                           name="UTILITYMASTER"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           onChange={handleInputChange}
//                           placeholder={
//                             String(datasav[index].UTILITYMASTER) || undefined
//                           }
//                           required
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button>
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
//                         <input
//                           type="number"
//                           name="INTERNET"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           onChange={handleInputChange}
//                           placeholder={
//                             String(datasav[index].INTERNET) || undefined
//                           }
//                           required
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button>
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
//                         <input
//                           type="number"
//                           name="EXCHANGEBROWSERMAIL"
//                           id={String(datasav[index].id) || undefined}
//                           min={0}
//                           max={5}
//                           maxLength={1}
//                           onChange={handleInputChange}
//                           placeholder={
//                             String(datasav[index].EXCHANGEBROWSERMAIL) ||
//                             undefined
//                           }
//                           required
//                         />
//                       </span>
//                     </button>
//                   </td>

//                   {/* <td className="px-6 py-4">
//                                         <button id={String(datas[index].id)} value={index} onClick={handleEdit} className='bg-[#fafafafa] hover:shadow-md p-3 m-2 hover:bg-rose500/60 rounded-md border-[1px] border-black' >
//                                             Update
//                                         </button>
//                                     </td> */}
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={handleDelete}
//                       id={String(datasav[index].id)}
//                       value={index}
//                       className="text-red-500/70 hover:underline border hover:border-[2px] hover:border-red-600/70 md:px-2 hover:bg-red-600/20 rounded-md md:py-2 hover:shadow-lg"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button>
//                       <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
//                         <input
//                           type="text"
//                           name="COMMENTS"
//                           id={String(datasav[index].id) || undefined}
//                           maxLength={100}
//                           onChange={handleComments}
//                           placeholder={
//                             String(datasav[index].COMMENTS) || undefined
//                           }
//                           required
//                         />
//                       </span>
//                     </button>
//                   </td>
//                   {/* <React.Fragment/> */}
//                 </tr>
//               ))}

//               {/* Add more table rows as needed */}
//             </tbody>
//             <button
//               className=" absolute right-1 rounded-md bg-[#333333] p-2 m-2 "
//               onClick={handleSave}
//             >
//               save works
//             </button>
//           </table>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Tablerows;
