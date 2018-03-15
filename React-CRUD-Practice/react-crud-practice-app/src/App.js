import React, { Component } from 'react';
import './App.css';
import User from './components/user'
import UniqueId from 'react-html-id'
//We want to declare a state within the Component. Below we will get started by
//creating a object-array that can be called on and looked through with a key. 

class App extends Component {

  //First, we will declare the state, in this case we are making some
  //Users and giving them some attributes like Name and Age. In this exercise we want to
  //make a list, so after setting up this state, we will "teleport" the information from it
  //by setting up a "teleport receiver" below within a list. We can call our teleport booth State, 
  //and to receive the objects we need a "receiver" set up within a list. 
constructor(){
  //We declared a constructor in order to use the unique id package. 
  super()
  //Here we are declaring the intention to use UniqueIds, and declaring they will be used here using this. 
  UniqueId.enableUniqueIds(this);
  this.state = {
    users: [
//id is = to 'Key'. We will refer to the Keys below, which help avoid an error in the deletion process.
//to give these objects unique ID's go into the terminal and 
//npm install react-html-id. import this package above. 
      {id:this.nextUniqueId(), name: "John", age: 22 },
      {id:this.nextUniqueId(), name: "Peter", age: 67 },
      {id:this.nextUniqueId(), name: "Jill", age: 14 }
    ]
  }
  //If you go into the React app and pull up the console, a unique ID is listed next to each 
  //individual object. 
  console.log(this.state);
}
  
  //This deleteUser will take an Index and an Event. 
  deleteUser = (index, e) => {
//So to delete a particular user, the state cannot be 'mutated' or react will not fire off at all, so in order to
//manipulate the state for deletion the first thing we must do is assign an array, in this case an array within an object
//this is accomplshed with Object.assign. It creates a duplicate array
//'Users' is actually a copy. 
    const users = Object.assign([], this.state.users);
//Here we are using splice which removes somehing from an array. Then we want to remove something from the bound index. And we want 
//to remove one item, hence: 1. 

    users.splice(index, 1);
//now we are saying we want to replace the users inside the state now, in this case we are replacing it with.. nothing. 
//by using setState, that is our way of telling react we want to change something about the state. 
    this.setState({users:users})
  }
//we need to pass down the user ID. the ID is referenced in the arguments, along with the element itself.
//First, in the argument we have this id. Based on the id, we need to find an element that is being changed. 
//
  changeUserName = (id, e ) => {
//The method 'findIndex' will take a user, for each user and then and return the user if user.id equals this id. ??? idk... thats what the guy says in the video..
//When the ID matches, it will return the index. Once we have the index we need to take the state. users and get the element 
//from the state itself. 
      const index = this.state.users.findIndex((user)=>{
        return user.id === id
      })
//Whenever we modify something, we ALWAYS need to create a COPY which is why we see setState so often associated with clones. 
//
const user = Object.assign({}, this.state.users[index])
//now that we have the users attached to the index, we can comment out the original state 
//and give it new names. This will be whatever the input element is inside whatever the 
//value is. 
user.name = e.target.value;

//Now we need to create a copy of the entire Users which will be useful for when we create a div. 
const users = Object.assign([], this.state.users);

users[index] = user

this.setState({users:users})
  }

  render() {
    return (
      <div className="App">
        <ul>

          {/* Here is the "receiver" of state. so we set up a user element to use as a receiver where we can teleport values into.
           Here we are using 'map' to look through user, and pull out what we want from it by referring to it below.
           'Index' defined in the argument is being passed down, which binds these all together, starting orignally with
           the inex defined above.  */}
          {this.state.users.map((user, index) => {
            return (<User
              age={user.age}
              key={user.id}
          /* Here we are passing down the 'delEvent'
           function, the commands of which, are defined above. We need to 'bind' this in order for the index to be passed down.
            */
              delEvent={this.deleteUser.bind(this, index)}
          /* The change event function is referenced here. The function itelf is above, 
          which will pass down what we need to make something happen. We passed in two arguments
          here, this and user.id. This isbecause we want to be able to pass down unique ids from above. */
              changeEvent={this.changeUserName.bind(this, user.id)}>
              {user.name}</User>)
          })
          }
        </ul>


      </div>
    );
  }
}

export default App;
