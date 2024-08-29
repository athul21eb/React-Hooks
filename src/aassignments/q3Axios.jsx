import { useEffect, useState } from "react";
import axios from 'axios';

function Axios() {
  let [counter, setCounter] = useState(1);
  let [user, setUser] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);




  useEffect(() => {
   

    
  let fetchData = async () => {
    setUser(null);
    setLoading(true);
    setError(null);
    try {
      let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${counter}`);
      console.log(result);
      if (result.status !== 200) {
        throw new Error("result is not success,",result);
      }

      let data = result.data;
      console.log(data);
      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };



    fetchData();
  }, [counter]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl mb-4">{counter}</h1>
      <div className="flex space-x-4 mb-4">
        <button 
          className="h-16 w-16 text-4xl bg-blue-950 text-white text-center rounded-full disabled:bg-blue-200" 
          onClick={() => setCounter(c => c + 1)} 
          disabled={counter >= 11}
        >+</button>
        <button 
          className="h-16 w-16 text-4xl  bg-red-500 text-white rounded-full disabled:bg-red-200" 
          onClick={() => setCounter(c => c - 1)} 
          disabled={counter <= 1}
        >
          -
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {loading && <p className="text-blue-500">Loading...</p>}
      
      {user && (
        <div className="bg-white h-4/6 w-auto p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">User Details</h3>
          <p className="text-xl">Name: {user.name}</p>
          <p className="text-xl">Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default Axios;
