
import { useState } from "react";
export function UpdateArrayState(){
    let[fruits,setFruits] = useState( [
        "Apple","banana","grapes","mango"
    ]);
function handleINput(){

    let newfruit = document.getElementById("input").value;
    document.getElementById("input").value = '';
    setFruits(f=>[...new Set([...f,newfruit])]);
}

function handleRemove(index){
setFruits(f=>f.filter((_,i)=>i!==index));

}
    return(<>
<ul>
    {fruits.map((fruit,i)=> <li key={i} onClick={()=>handleRemove(i)} style={{cursor:"pointer"}}> {fruit}</li>)}
</ul>
<input type="text" id="input"/>
<button onClick={handleINput}>Enter the element</button>

    </>);
}