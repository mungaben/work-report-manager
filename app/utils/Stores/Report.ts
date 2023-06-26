



import { create } from 'zustand';

import { ReportTypes } from '../Types/Mytypes';
import axios from 'axios';


const url = "http://localhost:3000/api/Reports"

interface ReportStoreTypes {
    report: ReportTypes[];
    setReport: (report: ReportTypes[]) => void;
    addReport: (report: ReportTypes) => void;
    deleteReport: (report: ReportTypes) => void;

}

export const useReportStore = create<ReportStoreTypes>((set) => ({
    report: [],
    setReport: (report: ReportTypes[]) => set(() => ({ report })),
    // addReport: (report: ReportTypes) => set((state) => ({ report: [...state.report, report] })),




    addReport: async (report: ReportTypes) => {
        try {
            // Make the API request to add the report
            const response = await axios.post(url, report);

            // Get the updated report data from the response
            const updatedReport = response.data;

            // Update the Zustand store with the new report
            set((state) => ({ report: [...state.report, updatedReport] }));
        } catch (error) {
            // Handle any error that occurred during the API request
            console.error('Error adding report:', error);
        }
    },




    // deleteReport: (report: ReportTypes) => set((state) => ({ report: state.report.filter((r) => r.id !== report.id) })),
    deleteReport: async (report: ReportTypes) => {
        try {
            // Make the DELETE request to the API endpoint
            await axios.delete(`url/${report.id}`);
            // Remove the deleted report from the store
            set((state) => ({
                report: state.report.filter((r) => r.id !== report.id),
            }));
        } catch (error) {
            console.error('Failed to delete report:', error);
            // Handle the error or show a notification to the user
        }
    },
}));




// Function to fetch initial data and update the store
// const fetchInitialData = async (setReport: (report: ReportTypes[]) => void) => {
//     try {
//       const response = await axios.get(url);
//       const data = response.data;
//       setReport(data);
//     } catch (error) {
//       console.error('Failed to fetch initial data:', error);
//     }
//   };
  
//   // Call the fetchInitialData function when the component mounts
//   const initializeStore = () => {
//     const reportStore = useReportStore.getState(); // Access the store instance
//     fetchInitialData(reportStore.setReport); // Fetch initial data and update the store
  
//     // Subscribe to changes in the store and update the state
//     useReportStore.subscribe((state) => {
//       reportStore.setReport(state.report);
//     });
//   };
  
//   initializeStore();
// //   Please give it a try and see if it resolves the issue.
  
  

const fetchInitialData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      useReportStore.getState().setReport(data);
    } catch (error) {
      console.error('Failed to fetch initial data:');
    }
  };
  
  // Call the fetchInitialData function when the component mounts
fetchInitialData();
  
  
  
  
  