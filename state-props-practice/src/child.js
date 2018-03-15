import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users'


class Child extends Component {

  constructor(){
    super();

    this.state = {
name: "John"
    
    }
    console.log('constructor')
  }

  componentWillMount(){
console.log('child componentWillMount')
  
}

componentDidMount(){
  console.log('child componentDidMount')

}

componentWillReceiveProps(){
    console.log('child componentWillReceiveProps')
  }
//if you return false, component will not re-render and will only change the parent coponent. the child component
//will not be altered. By returning true, the re-render is allowed, and John will be changed to Jill. 
  shouldComponentUpdate(nextProps, nextState){
    console.log('child shouldComponentUpdate')
    return true;
  }

  componentWillUpdate() {
    console.log('child componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('child componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('child componentWillUnmount')
  }

  render() {
      console.log('child render')
    return (
      <div className="App">
    {/* this will run before the App's cDM. In a hiarchy of components, the last ones
go first, and then works up the chain. The app's component, componentDidMount, will run in 
the end. ComponentDidMount is only run once.  */}
        child name: {this.props.name}
      </div>
    );
  }
}

export default Child;
