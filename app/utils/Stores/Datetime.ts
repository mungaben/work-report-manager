import { create } from "zustand";


interface StoreStateDtae {
    date: Date;
    setDate: (newDate: Date) => void;
  }



export const useDatetime = create<StoreStateDtae>((set) => ({
    date: new Date(),
    setDate: (date: Date) => set((state: any) => ({ date })),
}));
