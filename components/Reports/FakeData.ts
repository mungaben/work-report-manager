





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
    'INTERNET'
  ];


const generateFakeData = () => {
 
  const fakeData = [];
 
  

  for (let i = 0; i < applications.length; i++) {
    const data = {
      id: faker.string.uuid(),
      time: faker.number.int({ min: 0, max: 5 }),
      working: faker.datatype.boolean(),
      application: applications[i]
    };

    fakeData.push(data);
  }
  console.log(fakeData);
  

  return fakeData;
};
export default generateFakeData();











