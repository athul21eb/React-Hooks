
import { useState,useRef } from "react";

function Form() {

  let [input,setInput] = useState('');
  let [notValid,setValid]  = useState(true);
  let inputRef = useRef(null);
  
  function handleInputChange(event){

    setInput(event.target.value);

  }
  function handleValidate(e){
e.preventDefault();
    if(input.trim()===''){
setValid(false);
inputRef.current.focus();
    
    }else{
      setValid(true);
      console.log("Entered name is "+input)
      alert("Entered name is "+input)
     
    }
    

  }
  return (
    <>
    <form onSubmit={handleValidate}>
    <label htmlFor="input">
        Enter name:
        <input type="text" ref={inputRef} value={input} onChange={handleInputChange}/>
        
      </label>
     
<input type="submit" />
 {!notValid&&<p> name is required</p>}
    </form>

    </>
  );
}

export default Form;
