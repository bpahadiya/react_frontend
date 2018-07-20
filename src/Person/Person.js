import React, { Component } from 'react';
import './Person.css';
// const person = function(){
// 	// We can also write this
// }

// it is used bcos it is latest js6 and this keyword is used efficiently.//

// const person  = (props) => {
// 	return <p> I am {props.name} and my age is {props.age}</p>
// };

// if we want to print "hobbies" section then we have to code like

const person  = (props) => {
	return (
		<div className = "Person">
		  <p onClick={props.click}> I am {props.name} and my age is {props.age} </p>
		  <p> {props.children} </p>
		  <input type ="text" name = "name" onChange={props.changed} placeholder = "Not Available" value={props.name}/>&nbsp;&nbsp;
      <input type ="number" name = "age" onChange={props.changed} placeholder = "Not Available" value={props.age}/>
		</div>  
	)
};


// If you will remove onchange function and give directly value then you will see the values but cant edit that. 

export default person;