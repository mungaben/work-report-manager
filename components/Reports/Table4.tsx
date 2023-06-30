"use client"


import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import generateFakeData from './DataFake'
import { log } from 'console';
export const applications = [
    "ID",
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
        from:'FROM_0700' | 'FROM_0800' | 'FROM_0900' | 'FROM_1000' | 'FROM_1100' | 'FROM_1200' | 'FROM_1300' | 'FROM_1400' | 'FROM_1500' | 'FROM_1600';
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
        authorName: string; 
        author: {
            id: string
            name: string
            email: string
            password: string
            createdAt: string
            updatedAt: string
          }

        // ExchangeBrowserMail:number
    };

const Table4 = () => {
    const [tabledata, settabledata] = useState<MyDataType[]>([])
    const [settime, setsettime] = useState("")
    const [BASIS2, setBASIS2] = useState()
    const [INTERFACE, setInterface] = useState()
    const [CMS, setCMS] = useState()
    const [SPMS, setSPM] = useState()
    const [NewPREPAY, setNewPREPAY] = useState()
    const [OLDPERPAY, setOLDPERPAY] = useState()
    const [INTERNET, setINTERNET] = useState()
    const [ExchangeBrowser, setExchangeBrowser] = useState()
    const [Comments, setComments] = useState()
    const SavedData = localStorage.getItem("saveData")
    const [disablebtn, setdisablebtn] = useState(false)
    const [ChagedValue, setChagedValue] = useState<number | undefined>()

    const data = async () => {
        axios.get('/api/Reports').then((res) => {
            settabledata(res.data);
            console.log(res.data);
        });
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handleInputChange", e.target.value);
        const datachange = Number(e.target.value)
        setChagedValue(datachange)
        // const disabled = e.target.disabled
        // console.log("disabl;ed", disabled);
        // get index of row to edit
        // handleinput
        console.log("datachange type of", typeof(tabledata));
        

        const index = tabledata?.findIndex((data) => data.id === e.target.id)
        console.log("index to change", index);

        // console.log("target name", e.target.name);
        const targetName: string = e.target.name
        console.log("target name", targetName);
        // const dataToUpdate={...datasav[index], [targetName]: e.target.value}
        // console.log("dataToUpdate", dataToUpdate);
        
        // const dataUpdate = { ...tabledata[index], [targetName]: Number(e.target.value) }
        // console.log("index", index);

        // console.log("dataUpdate", dataUpdate);
        // handle inputs

        settabledata(tabledata.map((data) => {

            if (data.id === e.target.id) {
                // datachange && datachange !== undefined && datachange !== null && datachange >= 5? { ...data, [targetName]: datachange } : { ...data, [targetName]: e.target.value }
                if (datachange && datachange !== undefined && datachange !== null && datachange >= 5) {
                    console.log("data", data);
                    const dataUPatethis = { ...data, [targetName]:5}
                    console.log("dataUPatethis more than 5", dataUPatethis);
                    return dataUPatethis

                }else{
                    const dataUPatethis = { ...data, [targetName]: Number(e.target.value) }
                    console.log("dataUPatethis less than 5", dataUPatethis);
                    
                    return dataUPatethis
                }
                
               
                // console.log("dataUPatethis", dataUPatethis);
                // // SAVE to local storage
                // localStorage.setItem("saveData", JSON.stringify(dataUPatethis))
                // // upadted data this
                
              

            }
            //    if data updated does not march /simply cant return this 
           
            

            return data
        }))
        console.log("datasav changed", tabledata);

        // console.log("datasav changed", dataUpdate);
    }



    const handleDelete = async(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const value = event.currentTarget.value;
        const id = event.currentTarget.id;
        // console.log("id", id);
        // console.log("edit", value);
        // console.log("data avail", tabledata);
        const datasavcopy = [...tabledata]
        console.log("datasavcopy", datasavcopy);
        // get index 
        const indextr = tabledata?.findIndex((data) => data.id === id)
        indextr && axios.delete(`/api/Reports/${id}`).then((res) => {
            console.log("res", res.data);
           
            
        });
        if (indextr >= 0) {
            // Filter data by index value
            // const filteredTime = timedatas.filter((data, index) => index !== indextr);
            const indexedData = tabledata.filter((data, index) => data.id !== id, console.log("filteredTime", data));


            // console.log("filteredTime", filteredTime);
            console.log("indexedData", indexedData);

            // Update state variables with the filtered arrays
            // settimedatas(filteredTime);
            settabledata(indexedData);

        }
        // console.log("datasav data provi", datasav.length);
        
    }

    const handleComments = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log("handleInputChange", e.target.value);
        setsettime(e.target.value)
        // get index of row to edit
        const index = tabledata?.findIndex((data) => data.id === e.target.id)
        console.log("index to change", index);

        console.log("target name", e.target.name);
        const targetName: string = e.target.name
        console.log("target name", targetName);
        // const dataToUpdate={...datasav[index], [targetName]: e.target.value}
        // console.log("dataToUpdate", dataToUpdate);
        const dataUpdate = { ...tabledata[index], [targetName]: e.target.value }
        console.log("index", index);

        console.log("dataUpdate", dataUpdate);
        settabledata(tabledata.map((data) => {

            if (data.id === e.target.id) {
                const dataUPatethis = { ...data, [e.target.name]: e.target.value }
                console.log("dataUPatethis", dataUPatethis);
                // SAVE to local storage
                localStorage.setItem("saveData", JSON.stringify(dataUPatethis))
                // upadted data this
                return dataUPatethis

            }
            //    if data updated does not march /simply cant return this 
            return data
        }))
        console.log("datasav changed", tabledata);
    }



    const handleEdit = async(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const value: string = event.currentTarget.value;
        const id = Number(event.currentTarget.id);
        console.log("id", id);
        const datatopost = tabledata[id]
        console.log("data", datatopost);
        // post data to database on cleick edit
       const posteddata= await  axios.put("/api/Reports",datatopost
        ).then((resdata) => {
            console.log("resdata", resdata);
        }).catch((error) => {
            console.log("error", error);
        });
        // console.log("tabledata", tabledata);
        


    };

    useEffect(() => {
        data()
    }, [])

    return (
        <div>
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


                                </React.Fragment>
                            ))

                        }

                    </tr>


                </thead>
                <tbody>
                    {
                        tabledata?.map((datasav, index) => (



                            // loop all data tofill table

                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200/70 dark:hover:bg-gray-600">
                                {/* index col */}
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
                                {/* id cell */}
                                <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                                    <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                                            {index}
                                            <input disabled={true} type="text" name="id" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} value={datasav.author?.name} placeholder={datasav.id} required className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' />
                                        </span>
                                    </button>
                                </td>
                                {/* from cell */}
                                <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                                            <input disabled={true} type="text" name="from" value={datasav.from} id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} required className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' />
                                        </span>
                                    </button>
                                </td>
                                {/* to cell */}
                                <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                                            <input disabled={true} type="text" name="to" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} value={datasav.to} required className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' />

                                        </span>
                                    </button>
                                </td>
                                {/* basis2 */}
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                                            <input type="number" name="Basis2" pattern="[0-9]{0,5}" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} placeholder={String(datasav.Basis2) || undefined} onChange={handleInputChange} className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' />
                                        </span>
                                    </button>
                                </td>
                                {/* interface */}
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                                            <input type="number" name="interface" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} placeholder={String(datasav.Interface) || undefined} required onChange={handleInputChange} className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' />
                                        </span>
                                    </button>
                                </td>
                                {/* cms */}
                                {/* <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            <input type="number" min={0} max={5} maxLength={1} name="interface" id={String(datasav.id) || undefined} onChange={handleInputChange} placeholder={String(datasav.Interface) || undefined} required />
                                        </span>
                                    </button>
                                </td> */}
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            <input type="number" name="cms" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datasav.cms) || undefined} required />
                                        </span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            <input type="number" name="spms" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datasav.spms) || undefined} required />
                                        </span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            <input type="number" name="newperpay" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datasav.newperpay) || undefined} required />
                                        </span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            <input type="number" name="oldperpay" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datasav.oldperpay) || undefined} required />
                                        </span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            <input type="number" name="utilitymaster" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datasav.utilitymaster) || undefined} required />
                                        </span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            <input type="number" name="internet" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datasav.internet) || undefined} required />
                                        </span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            <input type="number" name="exchangemail" id={String(datasav.id) || undefined} min={0} max={5} maxLength={1} onChange={handleInputChange} placeholder={String(datasav.exchangemail) || undefined} required />
                                        </span>
                                    </button>
                                </td>

                                {/* <td className="px-6 py-4">
                                        <button id={String(datas[index].id)} value={index} onClick={handleEdit} className='bg-[#fafafafa] hover:shadow-md p-3 m-2 hover:bg-rose500/60 rounded-md border-[1px] border-black' >
                                            Update
                                        </button>
                                    </td> */}
                                <td className="px-6 py-4">
                                    <button onClick={handleDelete} id={String(datasav.id)} value={index} className='text-red-500/70 hover:underline border hover:border-[2px] hover:border-red-600/70 md:px-2 hover:bg-red-600/20 rounded-md md:py-2 hover:shadow-lg'>
                                        Delete
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            <input type="text" name="comments" id={String(datasav.id) || undefined} maxLength={100} onChange={handleComments} placeholder={String(datasav.comments) || undefined} required />
                                        </span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button onClick={handleEdit} id={String(index)} className='p-2 m-1 hover:bg-[#333333]/40  border-[1px] border-[#333333] rounded-md'>
                                        edit
                                    </button>
                                </td>


                                {/* <React.Fragment/> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table4