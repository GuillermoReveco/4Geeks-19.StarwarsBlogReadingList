import { createContext, useState } from "react";

export const arrPeopleContext = createContext(null);

const PeopleContext = ({children}) =>{
    const [arrPeople, setArrPeople] = useState();
    return(
        <arrPeopleContext.Provider value={{arrPeople, setArrPeople}}>
            {children}
        </arrPeopleContext.Provider>
    );
}

export default PeopleContext;