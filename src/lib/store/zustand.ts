import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, devtools } from 'zustand/middleware';

export const createStore = (name: string, store: () => any) =>
  create(devtools(immer(store), { anonymousActionType: name }));

export const createPersistStore = (name: string, store: (set: any) => any) =>
  create(
    devtools(persist(immer(store), { name }), { anonymousActionType: name })
  );
