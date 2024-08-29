import { useState } from "react";

export default function OnChange(){
let [input,setInput] = useState({year:2004,make:"chevorlet",model:"dodge"});
let[textarea,setTextarea] = useState("");
let [select,setSelect]= useState("");
let[radio,setRadio] = useState("D");
let [color,setColor] = useState('#888888');

function handleInput(e){
    setInput(input=>({...input,year:e.target.value}));
    ////setInput(input.year=e.target.value) it is a wrong way
    }
function handleTextarea(e){
    setTextarea(e.target.value);

}
function handleSelect(e){
    setSelect(e.target.value);
}

function handleRadio(e){
    setRadio(e.target.value);
}

function handleColor(e){
    setColor(e.target.value);
}

    return(
        <>


        <input type="text" value={input.year} onChange={handleInput}/>
        <p>Cat:{input.year},{input.make},{input.model}</p>

        <textarea  name="hi" id="1" placeholder="enter here" value={textarea} onChange={handleTextarea}></textarea>
       <p>Textarea:{textarea}</p>

       <select name="hh" id="11" value={select} onChange={handleSelect}>
        <option value="">select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Rupay">Rupay</option>
       </select>
    <div>
        <label ><input type="radio" value="D" checked={radio==='D'} onChange={handleRadio}/> Delivery</label>
        <label ><input type="radio" value='P' checked={radio==='P'} onChange={handleRadio}/> Pickup</label>
        </div>
<hr />
        <h1>Color picker</h1>
        <div  style={{backgroundColor:color ,height:100 ,width:100 }}>
            <p>Selected color:{color}</p>
        </div>

        <label htmlFor="color">Select a Color: <input type="color" value={color} onChange={handleColor}/></label>
       
       </>
    );
}
