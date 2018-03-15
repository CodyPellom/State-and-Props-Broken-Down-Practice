import React, { Component } from 'react';
import './App.css';
import Users from './components/Users'
import Child from './child'


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
the component. Render is going to take the state and the props and render our component */
    }  
console.log('componentWillMount')
  
}
/* Initally we had cWM, but AFTER render its cDM. THis means it has already rendered. What can we do with cDM? We can make
AJAX calls here, this is the best place to o it, or to setup any subscriptions. However you must unsubsribe when the component 
is Unmounted. You could technically setState in cDM, however it will re-render the component if you choose to setState in cDM.   */
componentDidMount(){
//   In a hiarchy of components, the last ones
// go first, and then works up the chain. The app's component, componentDidMount, will run in 
// the end. ComponentDidMount is only run once.
  console.log('componentDidMount')

}
//Another lifecyce hook in our tutorial, when we do the same to the child, we hook on another lifecycle to the 
//button associated with "changeState"
componentWillReceiveProps(){
  console.log('componentWillReceiveProps')
}
//This sounds more like a question, but it is the decision over should we re-render the component or not
//with return true, or return false. sCU also, has two arguments which are nextProps, and nextState

shouldComponentUpdate(nextProps, nextState){
  console.log('shouldComponentUpdate')
  return true;
}
//cWU is similiar to componentWillMount when you first init the render. if you want to set some variable based on
//the state, you cando it here because you have state and prop availiable. However, you cannot run a setState here, 
//because it will cause an infinite loop by creating another componentWillUpdate over and over ad infinum. 
componentWillUpdate() {
  console.log('componentWillUpdate')
}
//Change state is being called below in the button function. This is the function itself which will contain the change to the page
//and alter the state itself. 
changeState() {
  this.setState({name: 'jill'})
}
  render() {
    return (
      <div className="App">
      Name: {this.state.name}
{/* This is "calling" the actual change. This is where the change itself will appear, if the condition is met! */}
   <br/> | <br/> innerWidth: {this.state.innerWidth}
{/*Inserting/Teleporting the child from ./child; now whatever state we set up in ./child will be teleported into app. 
Don't forget to import the "Child" component at the top of App.js, as seen above...  */}
      <Child name={this.state.name}/>
{/*Here, I'm making a button that will alter the VitrualDOM with onClick. changeState above will dictate what effect the 
button will have on the page & what changes will happen to the State! And when applying a change in this button, we will also
include a .bind(this). */}
      <button onClick={this.changeState.bind(this)}>Change State</button>
        {/* Uncomment this out before tutorial! <Users/> */}
      </div>
    );
  }
}

export default App;
