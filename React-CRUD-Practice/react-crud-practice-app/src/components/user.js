import React from 'react';

//this is going to be a 'Stateless Component', so all we need is a 
//variable called user which is equal to and an arrow funtion. This user 
//Will have props so we can teleport over to the reciever Age and Name. 

const User = (props) => {
    return (<li>
{/* Here is the component being referenced to in App. The state is being sent from App,
all the way to this component. The values from that state are being assigned here. Then this component 
is being summoned on App.  */}
        <span>name: {props.children}, age={props.age}</span>
{/* We are going to put an input here to change the name, or put in a new name. This 
is two-way bound, and we will create the function for 'changeEvent' back on the app page. 
This is the event function that will enable our list to be edited! */}
        <input onChange={props.changeEvent} value={props.children}/>
{/* Now to begin on the D in CRUD, let begin constructing a button that will cause a delete function
to take place when it is pressed! There is a corresponding function called "delEvent" that I am about
to rig up so when this button is clicked, it will run deleteEvent inside app, that will then be passed
down to user..*/}
            <button onClick={props.delEvent}>Delete</button>
    </li>)

}


export default User;