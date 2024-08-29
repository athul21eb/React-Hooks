

import PropTypes from "prop-types";


 function Stundents(props){

    

    const styles = {
        border:"1px solid black",
        padding :20,
        margin: 10,
        "max-width":100,
        display:"inline-block"
        
        


    }
    return (
        <div style={styles}>
             <p >Name:{props.name}</p>
             <p>Age:{props.age}</p>
             <p>Student:{props.isStudent ? "yes":"no"}</p>
             <button onClick={props.fun}>change name</button>
        </div>
    )

   
}
Stundents.defaultProps ={
    name:"Guest"
,age:0,
isStudent:false,
fun:()=>{alert("default function")}}

Stundents.propTypes ={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
    fun:PropTypes.func
}


export default Stundents;