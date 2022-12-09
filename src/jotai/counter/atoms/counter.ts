import { atom } from 'jotai'

export const countAtom = atom(0)

export const decrementCountAtom = atom(null, (get, set) => set(countAtom, get(countAtom) - 1))
export const incrementCountAtom = atom(null, (get, set) => set(countAtom, get(countAtom) + 1))
export const increaseCountByAtom = atom(null, (get, set, by: number) => set(countAtom, get(countAtom) + by))