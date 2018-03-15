import React, { Component } from 'react';
import User from './User'


class Users extends Component {
//Declared a state, which will be 
//"Called upon" below, to fill in 
//information.
    state = {
//Ok, here is the information that will
//Be used below, when the state is "Called Upon"
        users: [
            {name:"John", age:20},
            {name:"Cookies", age:14},
            {name:"Fuqboui", age: 22},

        ],
        title: "Users List"
    }
//Okay so this is the button's FUNCTION that will carryout the 
//Action we want which is making the users younger
    makeMeYoungerButton = () => {
//We log 'clicked' so we can make sure there is something
//happening when we actually click the button...
        console.log('clicked')
//Now, what is setState all about? setState should be called "Change State Temporily"
//Or something along those lines. What actually happening is; react uses a virtual DOM  
      //and is simply comparing two states, when a difference is detected, the html element 
       //is changed. But if you refresh, the State will go back to the original version. 
        //this.setState({
          //  users: [
            //    {name:"John", age:10},
              //  {name:"Cookies", age:4},
                //{name:"Fuqboui", age: 12},]
                    // })
//This is the Dynamic method of setting up state. We use the 
//Map function to look at each User
const newState = this.state.users.map((user) => {
//Go through each User...
    const tempUser = user;
//And subtract the Age by "10"...
    tempUser.age -=10;
//Then you get a new state.
    return tempUser;
})
this.setState({
//Which you will want to render to show the dynamic changes. 
    newState
})
    }

    render() {
        return (
            <div>
{/* And now we are teleporting down the function from above. the funtion will be activated upon 
the button being clicked.  */}
                <button onClick={this.makeMeYoungerButton}>Make 10 Years Younger</button>
                <br/>
{/* Now you'll notice, the state is being "called" here. Basically
the information is being teleported from where it is originating from
to here. You could say State is to Teleporter as this.state is to teleporter receiver!!! */}
              <marquee>  <h1>{this.state.title}</h1></marquee>
            {/* <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
            <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
            <User age={this.state.users[2].age}>{this.state.users[2].name}</User> */}
            </div>
        );
    }
}

export default Users;