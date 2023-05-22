
"use client"






import React, { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi"

const SearchBar = () => {
    const [search, setsearch] = useState(false)
  return (
    <div className={`${search && "w-full"} flex flex-row justify-end items-center translate-x-1 transition `}>
      <div className=' font-[12px] w-full text-[#333333]' >
        <input type="text" placeholder="Search by anything " />
      </div>
      <div>
        <button onClick={()=>setsearch(prev=>!prev)}>
<BiSearchAlt/>
        </button>s
      </div>
    </div>
  )
}

export default SearchBar