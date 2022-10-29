import { createContext, useState, useEffect } from "react";
import getStore from "./Flux";

export const Context = createContext(null);

const inyectContext = (Component) =>{
    const AppContext = props =>{
        const [state, setState] = useState(getStore({
            getStore:()=> state.store,
            getActions:()=> state.actions,
            setStore: updateStore=> setState({
                store: Object.assing(state.store, updateStore),
                actions:{...state.actions}
            })
        }));

        useEffect(()=>{
            //state.action
        },[]);

        return(
            <Context.Provider value={state}>
                <Component/>
            </Context.Provider>
        );
    }
    return AppContext;
}

export default inyectContext;