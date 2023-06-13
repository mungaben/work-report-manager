import { create } from "zustand";

import { ActivityTypes } from "../Types/Mytypes";
import { set } from 'react-hook-form';




interface ActivityDataStore {
    activities: ActivityTypes[];
    setActivities: (activities: ActivityTypes[]) => void;
    addActivity: (activity: ActivityTypes) => void;
    removeActivity: (activity: ActivityTypes) => void;
    updateActivity: (activity: ActivityTypes) => void;
}



export const useActivitiesStore = create<ActivityDataStore>((set) => ({
    activities: [],
    setActivities(activities) {
        set({ activities });
    },
   
    addActivity: (activity) => set((state) => ({
        activities: [...state.activities, activity],
    })),
    removeActivity: (activity) => set((state) => ({
        activities: state.activities.filter((a) => a.id !== activity.id),
    })),
    updateActivity: (activity) => set((state) => ({

        activities: state.activities.map((a) => a.id === activity.id ? activity : a),
    })),
}));