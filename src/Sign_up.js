import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import { Button } from 'reactstrap';
import axios from 'axios';
// import * as Home from './users/Home';

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
    role: 'admin',
    }
    this.stateChange = this.stateChange.bind(this);
   }

   render() {
      return (
        <div class= "form-control">
          <div id= "errors">
          </div>
        <Form>
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
            <Button color="danger" onClick={() => this.checkvalidation()} >Submit</Button>
          </Form>
         </div>
      );
   }

   stateChange(event) {
    // variable = Symbol(variable)
    // this.setState({variable = event.target.value});
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
     })
     .catch(function (error) {
        if(error.response.status === 422){
          var errors = [];
          error.response.data.errors.forEach(function(element) {
            document.getElementById('errors').append(element);
          }
          );
       }
     });
    }

}

export default Sign_up;


// error.response.data.errors