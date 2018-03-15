import React, { Component } from 'react';


const User = (props) => {
        return (
          <div>
                  <div>
                    name: {props.children} |
                    Age: {props.age}
                   </div>

                 
                  </div>
  )};
        
        
export default User;