

"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// import { DataAvailable } from '../Activitydata';
// console.log("Data acvailables",DataAvailable());




ChartJS.register(ArcElement, Tooltip, Legend);



export const Dougnaut = {
    labelsdata: ['Red', 'Blue'],

    datasets: [
      {
        
        data: [ 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          
        ],
        borderWidth: 2,
      },
    ],
  };
