"use client";

import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";

export type MyDataType = {
  from:
    | "from_0700AM"
    | "from_0800AM"
    | "from_0900AM"
    | "from_1000AM"
    | "from_1100AM"
    | "from_1200PM"
    | "from_1300PM"
    | "from_1400PM"
    | "from_1500PM"
    | "from_1600PM";
  to:
    | "to_0800AM"
    | "to_0900AM"
    | "to_1000AM"
    | "to_1100AM"
    | "to_1200PM"
    | "to_1300PM"
    | "to_1400PM"
    | "to_1500PM"
    | "to_1600PM"
    | "to_1700PM";
  Basis2: number | string;
  Interface: number | string;
  cms: number | string;
  spms: number | string;
  newperpay: number | string;
  oldperpay: number | string;
  utilitymaster: number | string;
  internet: number | string;
  exchangemail: number | string;
  comments: string;
  authorId?: string;
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
  from_1600AM,
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
  to_1700AM,
}

type SessionData = {
  user?: {
    id?: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const TabaleRow = ({keys}:{keys:number}) => {
  const { data: session } = useSession();
  console.log("key",keys);
  

  // const id: string = session?.user?.id;
  // Accessing user session data with the added `id` property
  const { id }: SessionData["user"] = session?.user ?? {};

  const [authorId, setAuthorId] = useState<string>(id || "");

  const defaultData: MyDataType[] = [
    {
      from: "from_0700AM",
      to: "to_0800AM",
      Basis2: 5,
      Interface: 5,
      cms: 5,
      spms: 5,
      newperpay: 5,
      oldperpay: 5,
      utilitymaster: 5,
      internet: 5,
      exchangemail: 5,
      comments: "hello there",
      authorId: authorId,
    },
  ];

  const [tabledata, settabledata] = useState<MyDataType[]>([]);

  const [Datadis, setDatadis] = useState(false);
  const [savedData, setsavedData] = useState(false);

  // logics **************************************************************************************************************

  // #####################enums keys to loop ################################################################################################
  const keysToTime = Object.keys(ToTime).filter((v) => isNaN(Number(v)));
  

  console.log("keysToTime", keysToTime[0]);
  
  
  
 
  const keysFromTime = Object.keys(FromTime).filter((v) => isNaN(Number(v)));

  // ################################################################################################

  // select optoon 1-5
  const SelectNum = Array.from(Array(6).keys());
  // console.log("selectednumbers", SelectNum);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetName: string = e.target.name;
    const datachange = e.target.value;

    const ID = e.target.id;

    let datachanged;

    if (e.target.name === "from" || e.target.name === "to") {
      datachanged = e.target.value;
    } else {
      const parsedValue = Number(datachange);
    }

    const dataToUpdate = { ...tabledata, [targetName]: datachanged };

    settabledata(dataToUpdate);

    settabledata(
      tabledata.map((data) => {
        // comapare ID with Data.e.target.value

        if (ID) {
          // datachange && datachange !== undefined && datachange !== null && datachange >= 5? { ...data, [targetName]: datachange } : { ...data, [targetName]: e.target.value }
          if (datachange && datachange !== undefined && datachange !== null) {
            const dataUPatethis = {
              ...data,
              [targetName]:
                e.target.name === "from" || e.target.name === "to"
                  ? datachange
                  : Number(datachange),
            };

            return dataUPatethis;
          } else {
            const dataUPatethis = { ...data, [targetName]: datachange };

            return dataUPatethis;
          }
        }
        //    if data updated does not march /simply cant return this

        return data;
      })
    );
  };
  useEffect(() => {}, []);

  const handleComments = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const datachange = e.target.value;

    // get index of row to edit
    // const index = tabledata?.findIndex((data) => data.id === e.target.id)
    // console.log("index to change", index);

    const targetName: string = e.target.localName;

    settabledata(
      tabledata.map((data) => {
        if (e.target.id) {
          const dataUPatethis = { ...data, [e.target.name]: e.target.value };

          // SAVE to local storage
          localStorage.setItem("saveData", JSON.stringify(dataUPatethis));
          // upadted data this
          return dataUPatethis;
        }
        //    if data updated does not march /simply cant return this
        return data;
      })
    );
  };

  const handleEdit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDatadis((prev) => !prev);
    const id = Number(event.currentTarget.id);

    const data = tabledata[id];

    const jsonData = JSON.stringify(tabledata[0]);

    fetch("/api/Reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => {
        if (response.ok) {
          setsavedData((prev) => !prev);

          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        settabledata(data);
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log("tabledata", tabledata);

    // router.refresh()
  };

  // logics **************************************************************************************************************

  // use effect
  useEffect(() => {
    settabledata(defaultData);
    // setAuthorId(id)
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
        <button className="border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 bg-transparent dark:text-gray-300">
            <select
              name="from"
              id="from"
              onChange={handleInputChange}
              className="border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none"
            >
              <option  value={keysFromTime[keys]}>
                  {keysFromTime[keys]}
                </option>
            </select>
          </span>
        </button>
      </td>
      {/* to cell */}
      <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button className="border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 bg-transparent dark:text-gray-300">
            <select
              name="to"
              id="to"
              onChange={handleInputChange}
              className="border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none"
            >
             <option  value={keysToTime[keys]}>
                  {keysToTime[keys]}
                </option>
            </select>
          </span>
        </button>
      </td>
      {/* basis2 */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
        <button className="flex border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none ">
          <span className="text-sm font-medium text-gray-900 bg-transparent dark:text-gray-300 ">
            {/* <input type="number" name="Basis2" pattern="[0-9]{0,5}" min={0} max={5} maxLength={1} value={BASIS2} onChange={handleInputChange} className='border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none' /> */}

            <select
              name="Basis2"
              id="Basis2"
              defaultValue={defaultData[0].Basis2}
              onChange={handleInputChange}
              className=" outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SelectNum.map((datas, index) => (
                <option key={index} value={datas}>
                  {datas}
                </option>
              ))}
            </select>
          </span>
        </button>
      </td>
      {/* interface */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button className="flex border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 bg-transparent dark:text-gray-300">
            {/* <input type="number" name="interface" min={0} max={5} maxLength={1} value={INTERFACE} required onChange={handleInputChange} className='border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none' /> */}
            <select
              name="Interface"
              id="Interface"
              defaultValue={defaultData[0].Interface}
              onChange={handleInputChange}
              className=" outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SelectNum.map((datas, index) => (
                <option key={index} value={datas}>
                  {datas}
                </option>
              ))}
            </select>
          </span>
        </button>
      </td>
      {/* cms */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button className="flex border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
            <select
              name="cms"
              id="cms"
              onChange={handleInputChange}
              defaultValue={defaultData[0].cms}
              className=" outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SelectNum.map((datas, index) => (
                <option key={index} value={datas}>
                  {datas}
                </option>
              ))}
            </select>
          </span>
        </button>
      </td>
      {/* spms */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button className="flex border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
            <select
              name="spms"
              id="spms"
              onChange={handleInputChange}
              defaultValue={defaultData[0].spms}
              className=" outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SelectNum.map((datas, index) => (
                <option key={index} value={datas}>
                  {datas}
                </option>
              ))}
            </select>
          </span>
        </button>
      </td>
      {/* newperpay */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button className="flex border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
            <select
              name="newperpay"
              id="newperpay"
              defaultValue={defaultData[0].newperpay}
              onChange={handleInputChange}
              className=" outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SelectNum.map((datas, index) => (
                <option key={index} value={datas}>
                  {datas}
                </option>
              ))}
            </select>
          </span>
        </button>
      </td>
      {/* oldperpay */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button className="flex border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
            <select
              name="oldperpay"
              id="oldperpay"
              defaultValue={defaultData[0].oldperpay}
              onChange={handleInputChange}
              className=" outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SelectNum.map((datas, index) => (
                <option key={index} value={datas}>
                  {datas}
                </option>
              ))}
            </select>
          </span>
        </button>
      </td>
      {/* utilitymaster */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button className="flex border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
            <select
              name="utilitymaster"
              id="utilitymaster"
              defaultValue={defaultData[0].utilitymaster}
              onChange={handleInputChange}
              className=" outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SelectNum.map((datas, index) => (
                <option key={index} value={datas}>
                  {datas}
                </option>
              ))}
            </select>
          </span>
        </button>
      </td>
      {/* internet */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button className="flex border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
            <select
              name="internet"
              id="internet"
              defaultValue={defaultData[0].internet}
              onChange={handleInputChange}
              className=" outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SelectNum.map((datas, index) => (
                <option key={index} value={datas}>
                  {datas}
                </option>
              ))}
            </select>
          </span>
        </button>
      </td>
      {/* exchangemail */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button className="flex border-none outline-none appearance-none focus:outline-none hover:outline-none hover:border-none focus:border-none">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {/* <input type="number" name="cms" min={0} max={5} maxLength={1} onChange={handleInputChange} value={CMS} required /> */}
            <select
              name="exchangemail"
              id="exchangemail"
              defaultValue={defaultData[0].exchangemail}
              onChange={handleInputChange}
              className=" outline-none border-[1px] border-[#333333]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SelectNum.map((datas, index) => (
                <option key={index} value={datas}>
                  {datas}
                </option>
              ))}
            </select>
          </span>
        </button>
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            <input
              type="text"
              id="comments"
              name="comments"
              defaultValue={defaultData[0].comments}
              maxLength={100}
              onChange={handleComments}
              required
            />
          </span>
        </button>
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button
          onClick={handleEdit}
          disabled={Datadis}
          className={`p-2 m-1 hover:bg-[#333333]/40  border-[1px] border-[#333333]  bg-[#377DFF]  rounded-md disabled:opacity-50 ${
            Datadis && "   bg-[#333333] "
          } ${savedData && "bg-[#37CB87]"}`}
        >
          {Datadis ? (savedData ? "saved" : "saving ...") : "save"}
        </button>
      </td>

      {/* <React.Fragment/> */}
    </tr>
  );
};

export default TabaleRow;
