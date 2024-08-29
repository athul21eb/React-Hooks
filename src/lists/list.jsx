import PropTypes from 'prop-types'

export function List (props){

props.List.sort();
    const items = props.List.map((x,i)=><li key={i}>{x}</li>);
   
    return (<>
    <h1>{props.Category}</h1>
    <ol>
{items}
    </ol></>);
}

List.propTypes ={
    Category: PropTypes.string,
    List:PropTypes.array
}

List.defaultProps={
    Category:"Category",
    List: ["a","b","c"]
}