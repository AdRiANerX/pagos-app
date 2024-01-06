import { create } from "zustand";
import { ICollector } from "@/interfaces";

interface Store {
  collectors: ICollector[];
  pushCollectors: (payload: ICollector[]) => void;
  deleteCollector: (_id: string) => void;
}

export const useStore = create<Store>((set) => ({
  collectors: [],
  pushCollectors: (payload: ICollector[]) =>
    set((state) => ({ collectors: payload })),
  deleteCollector: (_id: string) =>
    set((state) => ({
      collectors: state.collectors.filter((item) => item._id !== _id),
    })),
}));
