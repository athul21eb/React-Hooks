import { useState } from "react"



export default function Food (){

  let [input,setInput] = useState('');
  let [erorinput,setErrorInput] = useState('');

function handleClick (event){
  setInput(event.target.value);
  

   
  }
  let check = ()=>{
    if(input.trim()===''){
setErrorInput("name is required");
    }else{
      setErrorInput("");
    }
  }

   return <>
 <input type="text " className="bg-blue-300" placeholder="enter your name" value={input} onChange={handleClick}/><br />
 <button onClick={check}>Submit</button>  
<h1 className="text-start">{erorinput||input}</h1>  
 </>
}