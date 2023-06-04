"use client"
import React, { SelectHTMLAttributes, useEffect, useState } from 'react'
import axios from 'axios';
import { parse } from 'path/win32';
import { set } from 'react-hook-form';
import { useRouter } from "next/navigation";
type MyDataType =
    {
        prepay: any;
        exchangebrowser: any;
        from: 'from_0700' | 'from_0800' | 'from_0900' | 'from_1000' | 'from_1100' | 'from_1200' | 'from_1300' | 'from_1400' | 'from_1500' | 'from_1600';
        to: 'to_0800' | 'to_0900' | 'to_1000' | 'to_1100' | 'to_1200' | 'to_1300' | 'to_1400' | 'to_1500' | 'to_1600' | 'to_1700';
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
        // ExchangeBrowserMail:number
    };
enum FromTime {
    from_0700AM,
    from_0800AM,
    from_0900AM,
    from_1000AM,
    from_1100AM,
    from_1200AM,
    from_1300AM,
    from_1400AM,
    from_1500AM,
    from_1600AM
}

enum ToTime {
    to_0800AM,
    to_0900AM,
    to_1000AM,
    to_1100AM,
    to_1200AM,
    to_1300AM,
    to_1400AM,
    to_1500AM,
    to_1600AM,
    to_1700AM
}

const TabaleRow = () => {
    const router = useRouter();
    const defaultData: MyDataType[] = [{
        from: 'from_0700',
        to: 'to_0800',
        Basis2: 5,
        Interface: 5,
        cms: 5,
        spms: 5,
        newperpay: 5,
        oldperpay: 5,
        utilitymaster: 5,
        internet: 5,
        exchangemail: 5,
        comments: 'hello there'
    },

    ]


    const dataList = Object.entries(defaultData).map(([key, value]) => (value));



    const [tabledata, settabledata] = useState<MyDataType[]>([])
    console.log("tabledata", tabledata);

    const [BASIS2, setBASIS2] = useState()
    const [INTERFACE, setInterface] = useState()
    const [CMS, setCMS] = useState()
    const [SPMS, setSPM] = useState()
    const [NewPREPAY, setNewPREPAY] = useState()
    const [OLDPERPAY, setOLDPERPAY] = useState()
    const [utilitymaster, setUtilitymaster] = useState()
    const [exchangemail, setExchangemail] = useState()
    const [INTERNET, setINTERNET] = useState()
    const [ExchangeBrowser, setExchangeBrowser] = useState()
    const [Comments, setComments] = useState()
    const [From, setFrom] = useState<FromTime>(FromTime.from_0700AM)
    const [To, setTo] = useState<ToTime>(ToTime.to_0800AM)
    const [ChagedValue, setChagedValue] = useState<number | undefined>()
    const [settime, setsettime] = useState("")

    // logics **************************************************************************************************************

    // #####################enums keys to loop ################################################################################################
    const keysToTime = Object.keys(ToTime).filter((v) => isNaN(Number(v)));


    const keysFromTime = Object.keys(FromTime).filter((v) => isNaN(Number(v)));

    // ################################################################################################


    // select optoon 1-5
    const SelectNum = Array.from(Array(6).keys());
    console.log("selectednumbers", SelectNum);


    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("handleInputChange", e.target.value);
        const datachange = Number(e.target.value)
        console.log("datachange", datachange);

        setChagedValue(datachange)
        const targetName: string = e.target.name
        console.log("target name", targetName);
        console.log(typeof (tabledata));
        const ID = e.target.id

        // const disabled = e.target.disabled
        // console.log("disabl;ed", disabled);
        // get index of row to edit
        // handleinput
        // make a copy of tabledata
        // const tabledatas = [...tabledata]
        // console.log("tabledatas OBN CHNGE", tabledatas);

        const dataToUpdate = { ...tabledata, [targetName]: datachange }
        console.log("dataToUpdate", dataToUpdate);
        settabledata(dataToUpdate)



        settabledata(tabledata.map((data) => {
            console.log("data", data);
            // comapare ID with Data.e.target.value




            if (ID) {


                // datachange && datachange !== undefined && datachange !== null && datachange >= 5? { ...data, [targetName]: datachange } : { ...data, [targetName]: e.target.value }
                if (datachange && datachange !== undefined && datachange !== null && datachange >= 5) {
                    console.log("data", data);
                    const dataUPatethis = { ...data, [targetName]: 5 }
                    console.log("dataUPatethis more than 5", dataUPatethis);
                    return dataUPatethis

                } else {
                    const dataUPatethis = { ...data, [targetName]: Number(e.target.value) }
                    console.log("dataUPatethis less than 5", dataUPatethis);

                    return dataUPatethis
                }
            }
            //    if data updated does not march /simply cant return this 

            return data
        }))
        console.log("datasav changed", tabledata);

        // console.log("datasav changed", dataUpdate);
    }





    const handleComments = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log("handleInputChange", e.target.value);
        setsettime(e.target.value)
        const datachange = e.target.value
        console.log("datachange", datachange);

        // get index of row to edit
        // const index = tabledata?.findIndex((data) => data.id === e.target.id)
        // console.log("index to change", index);

        console.log("target name", e.target.name);
        const targetName: string = e.target.name
        console.log("target name", targetName);

    
        settabledata(tabledata.map((data) => {

            if (e.target.id) {
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
        
    }



    const handleEdit = async(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const value: string = event.currentTarget.value;
        const id = Number(event.currentTarget.id);
        console.log("id", id);
        const data = tabledata[id]
        console.log("data", data);
        // post data to database on cleick edit
        axios.post("/api/Reports",{
            Basis2: data.Basis2,
            from: data.from,
            to: data.to,
            Interface: data.Interface,
            cms: data.cms,
            spms: data.spms,
            newperpay: data.newperpay,
            oldperpay: data.oldperpay,
            utilitymaster: data.utilitymaster,
            internet: data.internet,
            exchangemail: data.exchangemail,
            comments: data.comments
        }).then((resdata) => {
            console.log("resdata", resdata);
        }).catch((error) => {
            console.log("error", error);
        });
        // fetch('http://localhost:3000/api/Reports', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(datatopost),
        //   })
        //     .then(response => {
        //       if (response.ok) {
        //         return response.json();
        //       } else {
        //         throw new Error('Something went wrong');
        //       }
        //     })
        //     .then(data => {
        //       console.log(data);
        //     })
        //     .catch(error => {
        //       console.error(error);
        //     });
        // console.log("tabledata", tabledata);


    router.refresh()
    };



    // logics **************************************************************************************************************

    // use effect
    useEffect(() => {
        settabledata(defaultData)
    }, []);



    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200/70 dark:hover:bg-gray-600">
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

            {/* from cell */}
            <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                        <select name="SelectFrom" id="select_from" onChange={handleInputChange} className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                            {
                                // loop from keys
                                keysFromTime.map((datas, index) => (
                                    <option key={index} value={datas}>{datas}</option>
                                ))}



                        </select>
                    </span>
                </button>
            </td>
            {/* to cell */}
            <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                        <select name="SelectFrom" id="select_from" onChange={handleInputChange} className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' >
                            {
                                // loop tokeys
                                keysToTime.map((datas, index) => (
                                    <option key={index} value={datas}>{datas}</option>
                                ))}
                        </select>

                    </span>
                </button>
            </td>
            {/* basis2 */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none  flex ' >
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent  ">
                        {/* <input type="number" name="Basis2" pattern="[0-9]{0,5}" min={0} max={5} maxLength={1} value={BASIS2} onChange={handleInputChange} className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' /> */}

                        <select name="Basis2" id="Basis2" defaultValue={defaultData[0].Basis2} onChange={handleInputChange} className=' outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                                SelectNum.map((datas, index) => (

                                    <option key={index} value={datas}>{datas}</option>

                                ))}


                        </select>
                    </span>
                </button>
            </td>
            {/* interface */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none flex' >
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300 bg-transparent">
                        {/* <input type="number" name="interface" min={0} max={5} maxLength={1} value={INTERFACE} required onChange={handleInputChange} className=' outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none' /> */}
                        <select name="Interface" id="Interface" defaultValue={defaultData[0].Interface} onChange={handleInputChange} className=' outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                                SelectNum.map((datas, index) => (

                                    <option key={index} value={datas}>{datas}</option>

                                ))}


                        </select>
                    </span>
                </button>
            </td>
            {/* cms */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none flex'>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
                        <select name="cms" id="cms" onChange={handleInputChange} defaultValue={defaultData[0].cms} className=' outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                                SelectNum.map((datas, index) => (

                                    <option key={index} value={datas}>{datas}</option>

                                ))}


                        </select>
                    </span>
                </button>
            </td>
            {/* spms */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none flex'>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
                        <select name="spms" id="spms" onChange={handleInputChange} defaultValue={defaultData[0].spms} className=' outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                                SelectNum.map((datas, index) => (

                                    <option key={index} value={datas}>{datas}</option>

                                ))}


                        </select>
                    </span>
                </button>
            </td>
            {/* newperpay */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none flex'>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
                        <select name="newperpay" id="newperpay" defaultValue={defaultData[0].newperpay} onChange={handleInputChange} className=' outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                                SelectNum.map((datas, index) => (

                                    <option key={index} value={datas}>{datas}</option>

                                ))}


                        </select>
                    </span>
                </button>
            </td>
            {/* oldperpay */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none flex'>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
                        <select name='oldperpay' id="oldperpay" defaultValue={defaultData[0].oldperpay} onChange={handleInputChange} className=' outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                                SelectNum.map((datas, index) => (

                                    <option key={index} value={datas}>{datas}</option>

                                ))}


                        </select>
                    </span>
                </button>
            </td>
            {/* utilitymaster */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none flex'>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
                        <select name="utilitymaster" id="utilitymaster" defaultValue={defaultData[0].utilitymaster} onChange={handleInputChange} className=' outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                                SelectNum.map((datas, index) => (

                                    <option key={index} value={datas}>{datas}</option>

                                ))}


                        </select>
                    </span>
                </button>
            </td>
            {/* internet */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none flex'>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
                        <select name="internet" id="internet" defaultValue={defaultData[0].internet} onChange={handleInputChange} className=' outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                                SelectNum.map((datas, index) => (

                                    <option key={index} value={datas}>{datas}</option>

                                ))}


                        </select>
                    </span>
                </button>
            </td>
            {/* exchangemail */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='outline-none focus:outline-none appearance-none hover:outline-none border-none hover:border-none focus:border-none flex'>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
                        <select name="exchangemail" id="exchangemail" defaultValue={defaultData[0].exchangemail} onChange={handleInputChange} className=' outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                                SelectNum.map((datas, index) => (

                                    <option key={index} value={datas}>{datas}</option>

                                ))}


                        </select>
                    </span>
                </button>
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        <input type="text" id='comments' name="comments" defaultValue={defaultData[0].comments} maxLength={100} onChange={handleComments}  required />
                    </span>
                </button>
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button onClick={handleEdit} className='p-2 m-1 hover:bg-[#333333]/40  border-[1px] border-[#333333] rounded-md'>
                    save
                </button>
            </td>


            {/* <React.Fragment/> */}
        </tr>
    )
}

export default TabaleRow