
import PropTypes from 'prop-types'




export default function Rerenders ({fun=()=>{},index=0,task={isCompleted:false,Text:"hi"}}){

   
    return(
        <>
        <button onClick={() => fun(index)}>
        {task.isCompleted ? "✅" : "⭕"}
      </button>
      <span className= {`${task.isCompleted ? "linethrough":""}`} >{task.Text}</span></>
    );
}

Rerenders.propTypes= {

    fun : PropTypes.func,
    index:PropTypes.number,
    task:PropTypes.object,
}




