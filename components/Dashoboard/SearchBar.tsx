
"use client"






import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiSearchAlt } from "react-icons/bi"
type Inputs = {
    example: string,
    exampleRequired: string,
    search: string
};

const SearchBar = () => {

    const [search, setsearch] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("search")) // watch input value by passing the name of it
    return (
        <>
            <div className="flex flex-row justify-center  items-center top-4 rounded-md transition  bg-green-500 ">
                <div className=' font-[12px] w-full text-[#333333] ' >
                    <form onSubmit={handleSubmit(onSubmit)} className=' flex first-letter:items-center '>

                        <input defaultValue=" search anything" {...register("search")} />


                        {errors.exampleRequired && <span>This field is required</span>}

                        <button onClick={() => setsearch(prev => !prev)} className='   bg-[#377DFF] rounded-r-md flex items-center justify-center p-0.5 '>
                            <BiSearchAlt size={25} color='black' />
                        </button>
                    </form>
                </div>
               
            </div>
        </>
    )
}

export default SearchBar