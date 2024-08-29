/* eslint-disable react/prop-types */
import { Component } from "react";

// import React from "react";
// class App extends React.Component {
//   state = {
//     items: []
//   };

//   componentDidMount() {
//     this.addItems();
//   }

//   addItems() {
//     for (let i = 0; i < 10000; i++) {
//       this.setState(prevState => ({
//         items: [...prevState.items, `Item ${i}`]
//       }));
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.items.map(item => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     );
//   }
// }
class ComponentClass extends Component{
constructor(props){


    super(props);

    this.state={
        name:"athul"

    }
}


 handleclick=()=>{
    this.setState({name: `${this.state.name!=="athul"?"athul":"clicked"}`})
    console.log("cliked")
}



    render(){

        return(<>
        <span>hi man{this.props.age }{this.state.name} </span>

        <button className="w-[200px] h-1/4 block bg-black text-white" onClick={this.handleclick}>change</button>
        </>); 
     
    }
}


export default ComponentClass    ;