import React,{createContext,useReducer} from 'react';
import { DataReducer,initialState } from "../reducer/DataReducer";


export const DataContext = createContext();


function DataContextProvider(props) {
    const [state, dispatch] = useReducer(DataReducer, initialState)
    return (
        <DataContext.Provider value={{state,dispatch}}>
            {props.children}
        </DataContext.Provider>
    )
}



export default DataContextProvider
