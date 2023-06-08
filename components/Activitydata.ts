import axios from "axios";
import { useCallback } from "react";

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





const url="http://localhost:3000/api/Reports"




  
  
  
  // fetch data using url api
  export  const DataAvailable= async()=>{
   await fetch(url).then((res)=>{ 
      // console.log("this is res.jsons",res.json());
      
      return res.json()
    }).then((data:MyDataType[])=>{
      // console.log("data available in acativity data",data)
      const yesterdays = data.filter((item) => {
        const dateinfull=new Date(item.createdAt).getDate()=== new Date().getDate()
    
    
        console.log("dateinfull day is it equal",dateinfull);
        // dateinfull && setSelectedDtae((prev)=>[...prev,item])
    
    
        dateinfull && console.log("dateinfull",item);

        if (dateinfull) {
            return item;
            
        }
  
    })
  })}
 let Dataavail=[]
 export const DataAvailableprevious = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      
      const yesterdays = data.filter((item: MyDataType) => {
        if (new Date(item.createdAt).getDate() === new Date().getDate() - 1){
          return item;
        }
       
      });
  
      console.log("Data available in activity data last", yesterdays);
      return yesterdays;
    } catch (error) {
      console.error("Error retrieving data:", error);
      return [];
    }
  };
