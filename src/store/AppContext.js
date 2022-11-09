import { createContext, useState, useEffect } from "react";
import getState from "./Flux";

export const Context = createContext(null);

const inyectContext = (Component) =>{
    const AppContext = props =>{
        const [state, setState] = useState(
            getState({
                getStore:()=> state.store,
                getActions:()=> state.actions,
                setStore: updateStore=> 
                    setState({
                        store: Object.assign(state.store, updateStore),
                        actions:{...state.actions}
                    })
            })
        );

        useEffect(()=>{
            //state.action
        },[]);

        return(
            <Context.Provider value={state}>
                <Component {...props}/>
            </Context.Provider>
        );
    }
    return AppContext;
}

export default inyectContext;