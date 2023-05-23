

"use client";



import React from 'react'
import { Line } from 'react-chartjs-2';

import { LineData, options } from './LineChart';

const CenterCard = () => {
  return (
    <div className='  m-4 flex items-center justify-center shadow-md bg-[#fafafa]'> 
        <div className=' w-full'>
          <div className='w-full min-h-full '>
            <Line data={LineData}  width={200} height={75} options={options}/>
          </div>
     
        </div>
    </div>
  )
}

export default CenterCard