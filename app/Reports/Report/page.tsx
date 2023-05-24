import Report from '@/components/Reports/Report'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full bg-red-100'>
      <h2 className='bg-green-300 '> Report</h2>
      <div className=' w-full '>
        <Report/>
      </div>
    </div>
  )
}

export default page