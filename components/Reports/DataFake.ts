













// fake data for  in ts







import { faker } from '@faker-js/faker';
type MyDataType =
 {
    id: string;
    from: Date;
    to: Date;
    Basis2: number;
    Interface: number;
    CMS: number;
    SPMS: number;
    NEWPERPAY: number;
    OLDPERPAY: number;
    UTILITYMASTER: number;
    INTERNET:number,
    ExchangeBrowserMail:number
  };

export const applications = [
    'Basis 2',
    'INTERFACE',
    'CMS',
    'SPMS',
    'NEW PERPAY',
    'OLD PERPAY',
    'UTILITY MASTER',
    'INTERNET',
    "Exchange BrowserMail "
];



const generateFakeData= () => {
    const fakeData: never[]= [];
    
    for (let i = 0; i < applications.length; i++) {
        const data = {
            id: faker.string.uuid(),
            from: faker.date.past(),
            to: faker.date.recent(),
            Basis2: faker.number.int({ min: 0, max: 5 }),
            Interface: faker.number.int({ min: 0, max: 5 }),
            CMS: faker.number.int({ min: 0, max: 5 }),
            SPMS: faker.number.int({ min: 0, max: 5 }),
            NEWPERPAY: faker.number.int({ min: 0, max: 5 }),
            OLDPERPAY: faker.number.int({ min: 0, max: 5 }),
            UTILITYMASTER: faker.number.int({ min: 0, max: 5 }),
            INTERNET: faker.number.int({ min: 0, max: 5 })
        };
        const dataArrays = Object.entries(data);
        const mydata = dataArrays.forEach((element,index) => {
            // console.log("element", element);
            return element(1);
            // return element;
           



        });
        return fakeData;
          
    }
    
};

export default generateFakeData();











