import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import axios from 'axios';
import { createHashHistory } from 'history'
export const history = createHashHistory()



function validate(email, password) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

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
  return errors;
}



class Sign_in extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e) {
      e.preventDefault();
      
      const {email, password} = this.state;

      const errors = validate(email, password);
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
      this.checkvalidation()
    }

  render() {
    return (
      <Form>
        Email: <Input type="text" name = "email "value={this.state.email} onChange={this.emailChange}/> <br/>
        password: <Input type="password" name = "password" value={this.state.password} onChange={this.passwordChange} /> <br/>
        <Button onClick={() => this.checkvalidation()} >Submit</Button>
      </Form>
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
  }

  emailChange(event) {
    this.setState({email: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value});
  }


  checkvalidation (props) {
    var apiBaseUrl = "http://localhost:3004/api/v1/";
    var self = this;
    var payload=this.state
    axios.post(
      apiBaseUrl+'users/signin',
      {
        user: payload
      }
      )
     .then(function (response) {
     if(response.status >= 200 && response.status < 300){
      alert("Sign in successfully");
      debugger
      history.push('/dashboard')
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
export default Sign_in;