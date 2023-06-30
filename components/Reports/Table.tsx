// "use client"

// import React, { Suspense, use, useMemo, useState } from 'react'

// import { Column, useTable } from 'react-table';
// import { datafake } from './Data';
// type MyDataType =
//     {
//         id: string;
//         from: Date;
//         to: Date;
//         Basis2: number | string;
//         Interface: number | string;
//         CMS: number | string;
//         SPMS: number | string;
//         NEWPERPAY: number | string;
//         OLDPERPAY: number | string;
//         UTILITYMASTER: number | string;
//         INTERNET: number | string,
//         // datas:()=>void;

//     };

// const Table = () => {

//     console.log("genrtaed data ", fakeData);
//     console.log("genrtaed data ", applications);
//     const [datastates, setdatastates] = useState<MyDataType>()
//     const datas = useMemo(() => {
//         return fakeData
//     }, [])

//     console.log("dats valesdsfgfh", datas);







//     const columns: Column<MyDataType>[] = useMemo(
//         () => [
//             {
//                 Header: 'ID',
//                 accessor: 'id',
//             },
//             {
//                 Header: 'from',
//                 accessor: 'from',
//             },
//             {
//                 Header: 'to',
//                 accessor: 'to',
//             },
//             {
//                 Header: 'Basis2',
//                 accessor: 'Basis2',
//             },
//             {
//                 Header: 'Interface',
//                 accessor: 'Interface',
//             },
//             {
//                 Header: 'CMS',
//                 accessor: 'CMS',
//             },
//             {
//                 Header: 'SPMS',
//                 accessor: 'SPMS',
//             },
//             {
//                 Header: 'NEWPERPAY',
//                 accessor: 'NEWPERPAY',
//             },
//             {
//                 Header: 'OLDPERPAY',
//                 accessor: 'OLDPERPAY',
//             },
//             {
//                 Header: 'UTILITYMASTER',
//                 accessor: 'UTILITYMASTER',
//             }

//         ],
//         []
//     );

//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<MyDataType>({ columns, data: fakeData || [] })


//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <div className=' w-full flex'>
//                 <table {...getTableProps} className=' w-full' >




//                     <thead className=' flex flex-row  w-full  '   >
//                         {
//                             headerGroups.map((headerGroup, index) => (
//                                 <tr {...headerGroup.getHeaderGroupProps} key={index} className=' flex flex-row m-4' >
//                                     {
//                                         headerGroup?.headers?.map((column) => (
//                                             <th key={column.id} className=' flex flex-row m-4 justify-between items-center' >
//                                                 {column.render('Header')}
//                                             </th>
//                                         ))
//                                     }
//                                 </tr>
//                             ))
//                         }
//                     </thead>

//                     <tbody {...getTableBodyProps} className='m-2 '>
//                         {rows.map((row, index) => {
//                             prepareRow(row)
//                             return (
//                                 <tr key={index}  {...row.getRowProps()} className=' p-2 m-2'>
//                                     {row.cells?.map((cell, index) => {
//                                         return <td  {...cell.getCellProps()} key={String(row.id) + index} className=' border border-gray-400 '>

//                                             {cell.render('Cell')}

//                                         </td>
//                                     })}
//                                 </tr>
//                             )
//                         })}

//                     </tbody>

//                 </table>
//             </div>
//         </Suspense>
//     )
// }

// export default Table