import React, { use, useCallback, useEffect, useState } from 'react'

type MyDataType =
    {
        from: 'from_0700AM' | 'from_0800AM' | 'from_0900AM' | 'from_1000AM' | 'from_1100AM' | 'from_1200PM' | 'from_1300PM' | 'from_1400PM' | 'from_1500PM' | 'from_1600PM';
        to: 'to_0800AM' | 'to_0900AM' | 'to_1000AM' | 'to_1100AM' | 'to_1200PM' | 'to_1300PM' | 'to_1400PM' | 'to_1500PM' | 'to_1600PM' | 'to_1700PM'
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
        updatedAt:string
        createdAt:string
        id: string;
        AuthorId: string;
        Author: string;



    };


const ActivityData = () => {
const url="/api/Reports"
const [ActivtyData, setActivtyData] = useState<MyDataType[]>([])
const [Yesterdays, setYesterdays] = useState([])
const [SelectedDtae, setSelectedDtae] = useState<MyDataType[]>([])
console.log("SElectedDtae",SelectedDtae);

console.log("activity data in useste",ActivtyData);

// get data fot which datae is yesterdaty from ActivityData
// const YesterdayFunction=useCallback(()=>{
//   const yesterdays=ActivtyData.filter((item)=>{

//     const date=new Date(item.createdAt)===new Date()
//     console.log("date",date);
    
//     const yesterdaysDate=new Date()
    

//   })
// },[])

const YesterdayFunction = useCallback(() => {
  const yesterdays = ActivtyData.filter((item) => {
    const dateinfull=new Date(item.createdAt).getDate()=== new Date().getDate()


    console.log("dateinfull day is it equal",dateinfull);
    dateinfull && setSelectedDtae((prev)=>[...prev,item])


    dateinfull && console.log("dateinfull",item);
    

    

    // // console.log("data in full now", new Date());
    
    
    // const itemDate = new Date(item.createdAt).toISOString().slice(0, 10); // Get the date part of item.createdAt as a string
    // // console.log("itemDate", itemDate);
    
    // const todayDate = new Date().toISOString().slice(0, 10); // Get today's date as a string
    // // console.log("todayDate", todayDate);
    // const isYesterday = itemDate === todayDate;
    // // console.log("isYesterday", isYesterday);
    
    // // Rest of your code logic
  });
}, [SelectedDtae]);



// fetch data using url api
const DataAvailable=useCallback(()=>{
  fetch(url).then((res)=>{ 
    // console.log("this is res.jsons",res.json());
    
    return res.json()
  }).then((data)=>{
    // console.log("data available in acativity data",data)
    setActivtyData(data)

  })
},[ActivityData])

useEffect(()=>{
  DataAvailable()
  YesterdayFunction()
},[])



  return (
    <div>
datas
    </div>
  )
}



export default ActivityData