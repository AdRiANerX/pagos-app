/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { ICollector, IPerson } from "@/interfaces";

interface Store {
  userIsLoggedIn: boolean;
  setSession: (payload: boolean) => void;

  collectors: ICollector[];
  pushCollectors: (payload: ICollector[]) => void;
  deleteCollector: (_id: string) => void;

  people: IPerson[];
  pushPeople: (payload: IPerson[]) => void;
  pushPerson: (payload: IPerson) => void;
  updatePerson: (payload: IPerson) => void;
  deletePerson: (_id: string) => void;
}

export const useStore = create<Store>((set) => ({
  userIsLoggedIn: false,
  setSession: (payload: boolean) =>
    set((state) => ({ userIsLoggedIn: payload })),

  collectors: [],
  pushCollectors: (payload: ICollector[]) =>
    set((state) => ({ collectors: payload })),
  deleteCollector: (_id: string) =>
    set((state) => ({
      collectors: state.collectors.filter((item) => item._id !== _id),
    })),

  people: [],
  pushPeople: (payload: IPerson[]) => set((state) => ({ people: payload })),
  pushPerson: (payload: IPerson) =>
    set((state) => ({ people: [...state.people, payload] })),
  updatePerson: (payload: IPerson) => {
    set((state) => ({
      people: [
        ...state.people.filter((person) =>
          person._id === payload._id ? payload : person
        ),
      ],
    }));
  },
  deletePerson: (_id: string) =>
    set((state) => ({
      people: state.people.filter((item) => item._id !== _id),
    })),
}));
