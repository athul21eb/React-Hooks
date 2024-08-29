import {useState} from "react";
import style from "./count.module.css"

function Counter (){

    let [count,setCount] = useState(0);

    function Increment(){
        setCount(count=>count+1);
      
    }
    function Decrement(){
       if(count!==0){
        setCount(count-=1);
       }
    }
    function Reset(){
        setCount(0);
    }

    return(<>
<div className={style.Maindiv}>
    <h1 className={style.Counter}>{count}</h1>
    <button className={style.button} onClick={Increment} >Increment</button>  
    <button className={style.button}  onClick={Reset}>Reset</button>
    <button className={style.button}  onClickCapture={Decrement}>Decrement</button>
    </div>
     </>);
}


export default Counter;