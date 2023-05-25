
"use client"

import React, { ChangeEvent, useMemo, useState } from 'react'
import generateFakeData, { applications } from './DataFake'
import { tr } from '@faker-js/faker'
const timeData = [
    "7:00 AM",
    "8:00 AM",
    "9:00 PM",
    "10:00 AM",
    "11:00 AM",
    " 12:00 PM",
    "13:00PM",
    "14:00 PM",
    "15:00 PM",
    "16:00 PM",
]

// import { applications } from './FakeData';
const Table2 = () => {
    const datas = useMemo(() => generateFakeData, [])
    console.log("data generated", datas[1].id);
    const [settime, setsettime] = useState("")
    const [BASIS2, setBASIS2] = useState(2)
    const [INTERFACE, setInterface] = useState()
    const [CMS, setCMS] = useState()
    const [SPMS, setSPM] = useState()
    const [NewPREPAY, setNewPREPAY] = useState()
    const [OLDPERPAY, setOLDPERPAY] = useState()
    const [INTERNET, setINTERNET] = useState()
    const [ExchangeBrowser, setExchangeBrowser] = useState()





    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        console.log(e.target.name);

    }

    function handleComments(event: ChangeEvent<HTMLInputElement>): void {
        // throw new Error('Function not implemented.')
        console.log("comments", event.target.value);

    }

    const handleSave: (event: React.MouseEvent<HTMLButtonElement>) => void = () => {
        console.log("save", event);

    }

    const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        console.log("edit", button.textContent);

    };
    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const button: HTMLButtonElement = event.currentTarget;
        console.log("delete", button.textContent);
    }


    return (
        <div className=' transition'>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">


                        <tr className=' '>
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



                                        {/* <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th> */}
                                    </React.Fragment>
                                ))

                            }

                        </tr>


                    </thead>
                    <tbody>

                        {
                            timeData.map((data, index) => (

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200/70 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center ">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                                                <input type="text" name="id" id="" min={0} max={5} maxLength={1} value={index + 1} placeholder={String(datas[index].id) || undefined} required className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                                                <input type="text" name="from" id="" value={data} min={0} max={5} maxLength={1} placeholder={String(datas[index].to.toLocaleString) || undefined} required onChange={handleInputChange} className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                                                <input type="text" name="to" id="" min={0} max={5} maxLength={1} value={index > 5 ? (index + 8 + ": 00 PM") : (index + 8 + ": 00 AM")} placeholder={String(datas[index].from) || undefined} required className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' />

                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                                                <input type="number" name="Basis2" id="" min={0} max={5} maxLength={1} placeholder={String(datas[index].Basis2) || undefined} required onChange={handleInputChange} className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                                <input type="number" min={0} max={5} maxLength={1} name="interface" id="" onChange={handleInputChange} placeholder={String(datas[index].Interface) || undefined} required />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                                <input type="number" name="CMS" id="" min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datas[index].CMS) || undefined} required />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                                <input type="number" name="SPMS" id="" min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datas[index].SPMS) || undefined} required />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                                <input type="number" name="NEWPERPAY" id="" min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datas[index].NEWPERPAY) || undefined} required />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                                <input type="number" name="OLDPERPAY" id="" min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datas[index].OLDPERPAY) || undefined} required />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                                <input type="number" name="UTILITYMASTER" id="" min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datas[index].UTILITYMASTER) || undefined} required />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                                <input type="number" name="INTERNET" id="" min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datas[index].INTERNET) || undefined} required />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                                <input type="number" name="EXCHANGEBROWSERMAIL" id="" min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datas[index].EXCHANGEBROWSERMAIL) || undefined} required />
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={handleEdit} className='bg-[#fafafafa] hover:shadow-md p-3 m-2 hover:bg-rose500/60 rounded-md border-[1px] border-black' >
                                            Edit
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={handleDelete} className='text-red-500/70 hover:underline'>
                                            Delete

                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="text" name="" id="" placeholder='comment' onChange={handleComments} />
                                    </td>
                                    {/* <React.Fragment/> */}
                                </tr>


                            ))
                        }


                        {/* Add more table rows as needed */}
                    </tbody>
                    <button className=' absolute right-1 rounded-md bg-[#333333] p-2 m-2 ' onClick={handleSave}>
                        save works
                    </button>
                </table>
            </div>





        </div>
    )
}

export default Table2