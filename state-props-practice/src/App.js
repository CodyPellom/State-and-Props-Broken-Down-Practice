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
/* So, what are we saying here? IF the window(browserwindow) is BELOW 500, then we want the component to
"Change" the state . In this case, we are creating a notification that says the measurement of the window's
width in real-time. This is dynamic since this will change according to the user.  */
    if( window.innerWidth <500){
/* This is telling the component WHAT exactly we want to change once the condition above us is met. Once the 
window width is BELOW 500, the condition is being met. Once this is met, the state is altered. this is telling 
the VDOM what we want to alter the State with.  */
      this.setState({innerWidth:window.innerWidth})
/* Next, we will console log Render. render occurs after constructor, and cWM, and it'b job is basically to render 
the component. Render is going to take the state and the props and render our component. */
    console.log('componentWillMount')
  }
}

  render() {
    return (
      <div className="App">
      Name: {this.state.name}
{/* This is "calling" the actual change. This is where the change itself will appear, if the condition is met! */}
   <br/> | <br/> innerWidth: {this.state.innerWidth}
      
        <Users/>
      </div>
    );
  }
}

export default App;
