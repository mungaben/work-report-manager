import { create } from 'zustand';

import { Message } from '../Types/Mytypes';
import axios from 'axios';
import { getSession } from 'next-auth/react';

// const url = "http://localhost:3000/api/Massages";
const url = "http://localhost:3000/api/Messages"

interface MessageStoreTypes {
    message: Message[];
    setMessage: (report: Message[]) => void;
    addMessage: (report: Message) => void;
    deleteMessage: (report: Message) => void;

}

export const useMessageStore = create<MessageStoreTypes>((set) => ({
    message: [],
    setMessage: (message: Message[]) => set(() => ({ message })),
    // addReport: (report: ReportTypes) => set((state) => ({ report: [...state.report, report] })),




    addMessage: async (message: Message) => {
        try {
            // Make the API request to add the report
            const response = await axios.post(url, message);

            // Get the updated report data from the response
            const updatedMessage = response.data;

            // Update the Zustand store with the new report
            set((state) => ({ message: [...state.message, updatedMessage] }));
        } catch (error) {
            // Handle any error that occurred during the API request
            console.error('Error adding report:', error);
        }
    },




    // deleteReport: (report: ReportTypes) => set((state) => ({ report: state.report.filter((r) => r.id !== report.id) })),
    deleteMessage: async (message: Message) => {
        try {
            // Make the DELETE request to the API endpoint
            await axios.delete(`url/${message.id}`);
            // Remove the deleted report from the store
            set((state) => ({
                message: state.message.filter((r) => r.id !== message.id),
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
    const session = await getSession();
    // if (session){
    try {

        const response = await axios.get(url);
        const data = response.data;
        useMessageStore.getState().setMessage(data);
    } catch (error) {
        console.error('Failed to fetch initial data:');
    }
};
// }

// Call the fetchInitialData function when the component mounts

fetchInitialData();
