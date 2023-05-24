import React, { useMemo } from 'react'
import generateFakeData,{applications}from './DataFake'
import { useTable } from 'react-table';
const Table = () => {
    console.log("genrtaed data ",generateFakeData);
    console.log("genrtaed data ",applications);
    const data=useMemo(()=>generateFakeData,[]) 
    console.log("data provieded",data);
    
    const columns = useMemo(
      () => [
        {
          Header: 'Indentifier',
          accessor: 'name',
        },
        {
          Header: 'Title',  
          accessor: 'title',
        },
        {
          Header: 'Salary',  
          accessor: 'salary',
        },
      ],
      []
    );
    
    
  return (
    <div>
        table
    </div>
  )
}

export default Table