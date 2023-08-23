// import logo from './logo.svg';
// import './App.css';
// import Greet from './components/Greey';
import './components/Mystyle.css'
import React, {Component} from 'react';
import Hook from './components/hooks';
import Evnt from './components/Event';
import Pro from './components/props';





//functional component

// function App() {
//   return (
//     <div className="App">
//       <p style={{backgroundColor:'red',width:'100px',height:'100px',textAlign:'left'}}>hello</p>
//       <button>Click here</button>
//     </div>
//   );
// }


//class componet



class App extends Component{

  state = {
    string: "hello",
    string1: "Programers",
    string2: "Click"
  };


  handleChange = ()=>{
    this.setState({
      string1:"Are U Ready"
    });
  }


  render(){
    return(
      
      <div className="App">
        <h1 style={{width:'100px',height:'100px',textAlign:'center',fontFamily:'cursive'}}>Welcome</h1>
        <button onClick={this.handleChange}>{this.state.string2}</button>
        <h3>{this.state.string1}</h3>



        <Evnt/>

        <Pro name={"BMW"} model={"E30"}/>
        <Pro name={"Benz"} model={"S-class"}/>
        <Pro name={"Fiat"} model={"Punto"}/>
        <Pro name={"VW"} model={"Polo"}/>
        
        < Hook/>
      
      
    </div>
    )
  }
}

export default App;
