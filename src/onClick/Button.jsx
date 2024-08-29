

function Button(){

const HandleClick = (e)=>{
e.target.textContent === "Click me 😁" ?  e.target.textContent = "Ouch!🤕" : e.target.textContent = "Click me 😁";
}
    return(
        <>
        <button onClick={(e)=>HandleClick(e)}>Click me 😁</button>
        
        </>
    );
}

export default Button