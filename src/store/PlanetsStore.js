import { createContext, useState } from "react";

export const arrPlanetsContext = createContext(null);

const PlanetsContext = ({children}) =>{
    const [arrPlanets, setArrPlanets] = useState([]);
    return(
        <arrPlanetsContext.Provider value={{arrPlanets, setArrPlanets}}>
            {children}
        </arrPlanetsContext.Provider>
    );
}

export default PlanetsContext;