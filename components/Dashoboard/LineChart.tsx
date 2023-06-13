


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  import generateFakeData,{applications} from "../Reports/FakeData"
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'My work ',
      },
    },
  };
  export const Days=[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  export const Months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
  ]
  export const Year=[
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
  ]
type TimeSlot = 'from_0700AM' | 'from_0800AM' | 'from_0900AM' | 'from_1000AM' | 'from_1100AM' | 'from_1200PM' | 'from_1300PM' | 'from_1400PM' | 'from_1500PM' | 'from_1600PM'|'from_1700PM';

const timeSlots: TimeSlot[] = [
  'from_0700AM',
  'from_0800AM',
  'from_0900AM',
  'from_1000AM',
  'from_1100AM',
  'from_1200PM',
  'from_1300PM',
  'from_1400PM',
  'from_1500PM',
  'from_1600PM',
  'from_1700PM',
];
  
  const labels = timeSlots.map((application) => application);
  
  export const LineData = {
    labels,
    datasets: [
      {
        label: 'BASIS2',
        data: [3,4,5,6,7,8,9,6,4,3,2,5],
        borderColor: '#333333',
        backgroundColor: '#333333',
      },
      {
        label: "INTERFACE",
        data: labels.map(() => faker.number.int({ min: 0, max: 5 })),
        borderColor: 'green',
        backgroundColor: 'green',
      },
      {
        label: "CMS",
        data: labels.map(() => faker.number.int({ min: 0, max: 5 })),
        borderColor: 'rose',
        backgroundColor: 'rose',
      },
      {
        label: "SPMS",
        data: labels.map(() => faker.number.int({ min: 0, max: 5 })),
        borderColor: 'brown',
        backgroundColor: 'brown',
      },
      {
        label: "NEW PREPAY",
        data: labels.map(() => faker.number.int({ min: 0, max: 5 })),
        borderColor: 'red',
        backgroundColor: 'red',
      },
      {
        label: "OLD PREPAY",
        data: labels.map(() => faker.number.int({ min: 0, max: 5 })),
        borderColor: 'purple',
        backgroundColor: 'purple',
      },
      {
        label: "INTERNET",
        data: labels.map(() => faker.number.int({ min: 0, max: 5 })),
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
    ],
  };
