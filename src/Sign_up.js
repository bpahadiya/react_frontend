import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import { Button } from 'reactstrap';
import axios from 'axios';
// import * as Home from './users/Home';
function validate(first_name, last_name, role, dob, email, password, password_confirmation) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (first_name.length === 0) {
    errors.push("First Name can't be empty");
  }

  if (last_name.length === 0) {
    errors.push("Last Name can't be empty");
  }

  if (role.length === 0) {
    errors.push("role can't be empty");
  }

  if (dob.length === 0) {
    errors.push("dob can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split('').filter(x => x === '@').length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf('.') === -1) {
    errors.push("Email should contain at least one dot");
  }

  if (password.length < 6) {
    errors.push("Password should be at least 6 characters long");
  }

  if (password != password_confirmation) {
    errors.push("Password should match with password_confirmation");
  }

  return errors;
}

class Sign_up extends Component {
   constructor(props){
    super(props);
    this.state={
    email:'',
    password:'',
    password_confirmation: '',
    first_name: '',
    last_name: '',
    dob: '',
    contact_number: '',
    role: '',
     errors: [],
    }
    this.stateChange = this.stateChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
      e.preventDefault();
      
      const { first_name, last_name, role, dob, email, password, password_confirmation } = this.state;

      const errors = validate(first_name, last_name, role, dob, email, password, password_confirmation);
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
      this.checkvalidation()
    }

   render() {
      const { errors } = this.state;
      return (
        <div class= "form-control">
          <div id= "errors">
          </div>
        <Form onSubmit={this.handleSubmit}>
           {
            errors.map(error => (
            <p key={error}>Error: {error}</p>))
           }
            Email: <Input  type="text" name = "email" value={this.state.email} onChange={this.stateChange}/> <br/>
            First Name: <Input  type="text" name = "first_name" value={this.state.first_name} onChange={this.stateChange}/> <br/>
            Last Name: <Input  type="text" name = "last_name" value={this.state.last_name} onChange={this.stateChange}/> <br/>
            Date Of Birth: <Input  type="text" name = "dob" value={this.state.dob} onChange={this.stateChange}/> <br/>
            Contact Number: <Input  type="number" name = "contact_number" value={this.state.contact_number} onChange={this.stateChange}/> <br/>
            
            Role: <select name="role" onChange={this.stateChange} >
              <option value="admin">Admin</option>
              <option value="employe">employe</option>
            </select><br/>

            Password: <Input  type="password" name = "password" value={this.state.password} onChange={this.stateChange} /> <br/>
            Password confirmation: <Input  type="password" name = "password_confirmation" value={this.state.password_confirmation} onChange={this.stateChange} /> <br/>
            <Button color="danger" >Submit</Button>
          </Form>
         </div>
      );
   }

   stateChange(event) {
    // variable = Symbol(variable)
    // this.setState({event => event.target.value});
    if(event.target.name == "email") {
      this.setState({email: event.target.value});
    }
    else if(event.target.name == "password"){
      this.setState({password: event.target.value});
    }
    else if(event.target.name == "first_name"){
      this.setState({first_name: event.target.value});
    }
    else if(event.target.name == "last_name"){
      this.setState({last_name: event.target.value});
    }
    else if(event.target.name == "dob"){
      this.setState({dob: event.target.value});
    }
    else if(event.target.name == "contact_number"){
      this.setState({contact_number: event.target.value});
    }
    else if(event.target.name == "role"){
      this.setState({role: event.target.value});
    }
    else if(event.target.name == "password_confirmation"){
      this.setState({password_confirmation: event.target.value});
    }
  }

  checkvalidation (props) {
     var apiBaseUrl = "http://localhost:3004/api/v1/";
     var self = this;
     var payload=this.state
    axios.post(
      apiBaseUrl+'users/signup',
      {
        user: payload
      }
      )
     .then(function (response) {
     if(response.status >= 200 && response.status < 300){
       alert("Sign up successfully");
       // debugger
       // BrowserRouter.push('/Sign_in');
       // var uploadScreen=[];
       // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
       // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
     }

     // else if(error.response.status === 422){
     //    var errors = [];
     //    error.response.data.errors.forEach(function(element) {
     //      document.getElementById('errors').append(element);
     //    }
     //    );
     // }

     })
     .catch(function (error) {
        alert("some thing is wrong")
     });
    }

}

export default Sign_up;


// error.response.data.errors
// onClick={() => this.checkvalidation()}