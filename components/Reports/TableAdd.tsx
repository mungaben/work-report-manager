

"use client"

import React, { useState } from 'react'
import Tablerows from './Tablerows';
import TabaleRow from './TabaleRow';
import { useSession } from 'next-auth/react';
export const applications = [
    "From",
    "To",
    'Basis 2',
    'INTERFACE',
    'CMS',
    'SPMS',
    'NEW PERPAY',
    'OLD PERPAY',
    'UTILITY MASTER',
    'INTERNET',
    "Exchange BrowserMail ",

];
type MyDataType =
    {
        id: string;
        from: 'FROM_0700' | 'FROM_0800' | 'FROM_0900' | 'FROM_1000' | 'FROM_1100' | 'FROM_1200' | 'FROM_1300' | 'FROM_1400' | 'FROM_1500' | 'FROM_1600';
        to: 'TO_0800' | 'TO_0900' | 'TO_1000' | 'TO_1100' | 'TO_1200' | 'TO_1300' | 'TO_1400' | 'TO_1500' | 'TO_1600' | 'TO_1700';
        Basis2: number | string;
        Interface: number | string;
        cms: number | string;
        spms: number | string;
        newperpay: number | string;
        oldperpay: number | string;
        utilitymaster: number | string;
        internet: number | string,
        exchangemail: number | string,
        comments: string;
        authorId: string;
        // ExchangeBrowserMail:number
    };

const TableAdd = () => {
    const [TableData, setTableData] = useState<MyDataType[]>()


const timeSlots = [
    'FROM_0700',
    'FROM_0800',
    'FROM_0900',
    'FROM_1000',
    'FROM_1100',
    'FROM_1200',
    'FROM_1300',
    'FROM_1400',
    'FROM_1500',
    'FROM_1600',
  ];
  



    return (

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">


                <tr className=''>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="checkbox-all-search" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </th>

                    {
                        applications.map((app, index) => (

                            <React.Fragment key={index}>

                                <th scope="col" className="px-6 py-3 text-[#333333]">

                                    {app}
                                </th>


                            </React.Fragment>
                        ))

                    }

                </tr>


            </thead>
            <tbody>
                {/* daily  report */}
                {
                    timeSlots.map((datas, index) => (
                        <React.Fragment key={index}>
                            <TabaleRow keys={index} />


                        </React.Fragment>


                    ))
                }



                {/* Add more table rows as needed */}
            </tbody>
            <input className=' absolute right-1 rounded-md bg-[#333333] p-2 m-2 ' type='button' value="Delete" />


        </table>

    )
}

export default TableAdd