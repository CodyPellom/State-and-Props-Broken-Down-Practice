import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users'
class App extends Component {
//Peter would run first
  //state = {
    //name: "Peter"
 // }
  /*The constructor is going to run only once, after render its job
  is done. Placing state outside of constructor is preferable because 
  whatever is declared on the outsie will run first, or faster than being
  inside the constructor. */
  constructor(){
    super();
/* Then, John would run Second, so the most recent render will appear
in this case, John would appear over Peter in the teleporter call below. T
Teleporter... meaning the this.state.name. Teleporter is cathier to remember to me.*/
    this.state = {
name: "John"
    
    }
    console.log('constructor')
  }
/*constructor will run first, and then componentWillMount function will run secondy.
what can we do with cWM? cWM runs after the constructor, so you can actully change the 
state. Why would we do that even after setting the initial state in the constructor?
Sometimes, based on the props, youd want to change the state. The component hasnt been rendered
yet, so if I change the state right now, the component won't re-render itself. We can also do
something with global events, llike window or Docs. Just like we are doing below we will use cWM 
to notify the user whenever the window is below a certain measurement.*/ 
  componentWillMount(){
    console.log('componentWillMount')
  }

  render() {
    return (
      <div className="App">
      {this.state.name}
      
        <Users/>
      </div>
    );
  }
}

export default App;
