
import React from 'react'

const TabaleRow = () => {
  return (
    
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
  )
}

export default TabaleRow