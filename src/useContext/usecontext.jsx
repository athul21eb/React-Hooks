import { createContext,useState } from "react";
import B from './componentB'

export const Context = createContext();
export default function UseContext(){

    let[ user]  = useState("React Developer")    ;

    return(
        <div >
            
          <h2>hi</h2>
          <Context.Provider value={user}>
          <B />
          </Context.Provider>
        
          
        </div>
    );
}