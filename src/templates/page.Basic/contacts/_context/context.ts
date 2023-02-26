import { createContext } from 'react';

export interface attributeData {
  user: string,
  mail: string,
  msg: string,
}

export interface ContextType {
  data:  attributeData | {},
  setData: (e: any) => void, 
  contextState: boolean,
  setContextState: (e: any) => void,                            //////////////////////////////
}

export const defaultState = {
  data: {},
  setData: () => {},
  contextState: false,
  setContextState: (contextState: boolean) => !contextState    //////////////////////////////// 
}

const Context = createContext<ContextType>(defaultState); //////////////////////////////

export { Context };