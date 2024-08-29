import { useEffect, useState } from "react";
import './zq3.css'
function  Fetch(){

    
    let [counter,setCounter] = useState(1);
    let [ userdata ,setUserData] = useState(null);
    let [loading,setLoading] = useState(false);
    let [ error,setError] = useState(null);

useEffect(()=>{
    let fetchData = async()=>{
        setLoading(true);
    setError(null);
  

    try {

        let result = await fetch(`https://jsonplaceholder.typicode.com/users/${counter}`);
       console.log(result);

        if(!result.ok){
            throw new Error("Network fetch is not ok");
        }
        
        let data = await result.json();
        console.log(data);

 
        setUserData(data);
      
        
    } catch (error) {

        setError(error.message);
        
    }finally{
        setLoading(false);
    }
    }

    fetchData();
    
},[counter])
    

    return(
        <div className="CounterApp">
        <h1>{counter}</h1>
        <button onClick={() => setCounter(c => c + 1)} disabled={counter >= 10}>+</button>
        <button onClick={() => setCounter(c => c - 1)} disabled={counter <= 1}>-</button>

        {loading && <h3 className="loading">Loading...</h3>}
        {error && <p className="error">{error}</p>}

        {userdata && (
            <div className="user-details">
                <h1>User Details</h1>
                <p>Name:{userdata.name.toUpperCase()}</p>
                <p>Email:{userdata.email}</p>
            </div>
        )}
    </div>
    );
}

export default Fetch