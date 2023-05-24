"use client"

import React, { use, useMemo, useState } from 'react'
import fakeData,{applications}from './DataFake'
import { Column, useTable } from 'react-table';
import { datafake } from './Data';
type MyDataType =
 {
    id: string;
    from: Date;
    to: Date;
    Basis2: number;
    Interface: number;
    CMS: number;
    SPMS: number;
    NEWPERPAY: number;
    OLDPERPAY: number;
    UTILITYMASTER: number;
    
  };

const Table:React.FC<MyDataType> = () => {

    console.log("genrtaed data ",fakeData);
    console.log("genrtaed data ",applications);
  

    
  
   
    
    const columns:Column<MyDataType>[] = useMemo(
      () => [
        {
          Header: 'ID',
          accessor: 'id',
        },
        {
          Header: 'from',  
          accessor: 'from',
        },
        {
          Header: 'to',  
          accessor: 'to',
        },
        {
          Header: 'Basis2',  
          accessor: 'Basis2',
        },
        {
          Header: 'Interface',  
          accessor: 'Interface',
        },
        {
          Header: 'CMS',  
          accessor: 'CMS',
        },
        {
          Header: 'SPMS',  
          accessor: 'SPMS',
        },
        {
          Header: 'NEWPERPAY',  
          accessor: 'NEWPERPAY',
        },
        {
          Header: 'OLDPERPAY',  
          accessor: 'OLDPERPAY',
        },
        {
          Header: 'UTILITYMASTER',  
          accessor: 'UTILITYMASTER',
        }

      ],
      []
    );
    
    const { getTableProps,getTableBodyProps,headerGroups,rows,prepareRow }=useTable({ columns, data:fakeData})
    
    
  return (
    <div className=' w-full flex'>
        <table {...getTableProps} className=' w-full' >




            <thead className=' flex flex-row  w-full  '   >
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps} className=' flex flex-row m-4' >
                            {
                                headerGroup?.headers?.map((column) => (
                                    <th key={column.id}  className=' flex flex-row m-4 justify-between items-center' >
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>

            <tbody {...getTableBodyProps} className='m-2 '>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr  {...row.getRowProps()} className=' p-2 m-2'>
                            {row.cells?.map((cell,index) => {
                                return <td  {...cell.getCellProps()} className=' border border-gray-400 '>
                                    
                                    {cell.render('Cell')}
                                    
                                    </td>  
                            })}
                        </tr>
                    )
                })}





            </tbody>








        </table>
    </div>
  )
}

export default Table