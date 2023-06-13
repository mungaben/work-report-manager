

import { create } from 'zustand';
import { ReportTypes, User } from '../Types/Mytypes';

import axios from 'axios';

const url = "http://localhost:3000/api/Messages"

interface UserTypes {
    user: User[];
    setUser: (users: User[]) => void;
    addUser: (user: User) => void;
    deleteUser: (user: User) => void;
  }

export const useReportStore = create<UserTypes>((set) => ({
    user: [],
    setUser: (user: User[]) => set(() => ({ user })),
    // addReport: (report: ReportTypes) => set((state) => ({ report: [...state.report, report] })),




    addUser: async (user: User) => {
        try {
            // Make the API request to add the report
            const response = await axios.post(url, user);

            // Get the updated report data from the response
            const updatedUser = response.data;

            // Update the Zustand store with the new report
            set((state) => ({ user: [...state.user, updatedUser] }));
        } catch (error) {
            // Handle any error that occurred during the API request
            console.error('Error adding report:', error);
        }
    },




    // deleteReport: (report: ReportTypes) => set((state) => ({ report: state.report.filter((r) => r.id !== report.id) })),
    deleteUser: async (user:User) => {
        try {
            // Make the DELETE request to the API endpoint
            await axios.delete(`url/${user.id}`);
            // Remove the deleted report from the store
            set((state) => ({
                user: state.user.filter((r) => r.id !== user.id),
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
        useReportStore.getState().setUser(data);
    } catch (error) {
        console.error('Failed to fetch initial data:');
    }
};

// Call the fetchInitialData function when the component mounts
fetchInitialData();


