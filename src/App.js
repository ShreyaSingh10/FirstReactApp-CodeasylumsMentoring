import React from 'react';

class App extends React.Component {
    state ={
      value: 2,
      name: "Shreya",
      //counter: 0
    }


  clickHandler = () => {
    this.setState({name: 'xyz', value: 5}); //setState is asynchronous
    //console.log("FunctionState", this.state); //not right place to print state
    this.setState({name: 'xyz', value: 5}, () => console.log("FunctionState",this.state) );
    this.setState({name: 'xyz', value: 5}, this.displayItems ); //how to call function in callback
  }
  
  displayItems = () => {
    console.log("Display");
  }

  componentWillMount() {
    //api calls ----wrong!
  }

  componentDidMount() {
    //make api calls here ---right!
    // id = settimeout
    // set the id in state
  }

  shouldComponentUpdate(){
    return true;
    // this.state.counter === 1
    //   return true
    // else if  counter>1
    //   return false;
  }

  componentWillUnmount(){
    //cancel api calls
    //cancel timers
    //get the id from state and cancel the timer
  }

  render() {
    //Dont call setState inside render it will be an infinte loop
    //console.log("RenderState", this.state); //------Right!!
    return(
      <div>
        {this.state.name}
        <button onClick={this.clickHandler}>Click me</button>
        }
      </div>
    );
  }
}

export default App;

//function components
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         hi
//       </header>
//     </div>
//   );
// }
//export default App;







