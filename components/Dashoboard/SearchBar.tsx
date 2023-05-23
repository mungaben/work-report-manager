
"use client"






import React, { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi"

const SearchBar = () => {
    const [search, setsearch] = useState(false)
    return (
        <div className={`${search && "w-full"} flex flex-row justify-center  items-center top-4 rounded-md  transition  `}>
            <div className=' font-[12px] w-full text-[#333333] ' >
                <input type="text" placeholder="Search by anything " />
            </div>
            <div>
                <button onClick={() => setsearch(prev => !prev)} className=' m-2  bg-[#377DFF]'>
                    <BiSearchAlt size={20} color='#333333' />
                </button>
            </div>
        </div>
    )
}

export default SearchBar