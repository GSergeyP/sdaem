import { createContext } from 'react';

export interface attributeData {
  id: string | null, 
  rooms: Array<{}>, 
  priceMin: string | null, 
  priceMax: string | null,
  bed: Array<{}>,
  district: Array<{}>,
  metro: Array<{}>,
  checked: Array<{}>,
  [key: string]: any
}

export interface ContextType {
  dataRoomCard:  attributeData | any,
  setDataRoomCard: (e: any) => void, 
}

export const defaultState = {
  dataRoomCard: [],
  setDataRoomCard: () => {},
}

const Context = createContext<ContextType>(defaultState); //////////////////////////////

export { Context };