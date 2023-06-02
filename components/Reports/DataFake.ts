





"use client"







// fake data for  in ts







import { faker } from '@faker-js/faker';
type MyDataType =
 {
    targetValue(targetValue: any): unknown;
    targetvalue(targetvalue: any): unknown;
    targetname: any;
    id: string;
    from: string|Date;
    to: string|Date;
    Basis2: number|string;
    Interface: number|string;
    CMS:number|string;
    SPMS: number|string;
    NEWPERPAY: number|string;
    OLDPERPAY: number|string;
    UTILITYMASTER: number|string;
    INTERNET:number|string,
    EXCHANGEBROWSERMAIL:number|string,
    COMMENTS:string
    
    // ExchangeBrowserMail:number
  };

export const applications = [
    "ID",
    "From",
    "To",
    'Basis 2',
    'INTERFACE',
    'CMS',
    'SPMS',
    'NEW PERPAY',
    'OLD PERPAY',
    'UTILITY MASTER',
    'INTERNET',
    "Exchange BrowserMail ",
    'authorid'
];



const generateFakeData=  ()  => {
    const fakeData:MyDataType[]=[];
    
     
        applications.map(()=>{
            const data = {
                id: faker.string.uuid(),
                from: faker.date.past().toLocaleString(),
                to: faker.date.recent().toLocaleString(),
                Basis2: faker.number.int({ min: 0, max: 5 }),
                Interface: faker.number.int({ min: 0, max: 5 }),
                CMS: faker.number.int({ min: 0, max: 5 }),
                SPMS: faker.number.int({ min: 0, max: 5 }),
                NEWPERPAY: faker.number.int({ min: 0, max: 5 }),
                OLDPERPAY: faker.number.int({ min: 0, max: 5 }),
                UTILITYMASTER: faker.number.int({ min: 0, max: 5 }),
                INTERNET: faker.number.int({ min: 0, max: 5 }),
                EXCHANGEBROWSERMAIL: faker.number.int({ min: 0, max: 5 }),
                COMMENTS: faker.lorem.paragraphs(2)
            };
            fakeData.push(data);
        })
        // fakeData.push(data);
    
      
        
    
       
        // console.log("mydata", mydata);
     
        
        return fakeData;
          
    
    
};

export default generateFakeData();











