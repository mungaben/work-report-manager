













// fake data for  in ts







import { faker } from '@faker-js/faker';
export  const applications = [
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



const generateFakeData = () => {
 
  const fakeData = [];
 
  

  for (let i = 0; i < applications.length; i++) {
    const data = {
      id: faker.string.uuid(),
      from: faker.date.past(),
      to: faker.date.recent(),
      Basis2:faker.number.int({ min: 0, max: 5 }),
      Interface:faker.number.int({ min: 0, max: 5 }),
      CMS:faker.number.int({ min: 0, max: 5 }),
      SPMS:faker.number.int({ min: 0, max: 5 }),
      NEWPERPAY:faker.number.int({ min: 0, max: 5 }),
      OLDPERPAY:faker.number.int({ min: 0, max: 5 }),
      UTILITYMASTER:faker.number.int({ min: 0, max: 5 }),
     

    };

    fakeData.push(data);
  }
  console.log(fakeData);
  

  return fakeData;
};
export default generateFakeData();











