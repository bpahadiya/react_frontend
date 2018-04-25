import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import axios from 'axios';
// import UploadScreen from '../uploadScreen'

class Sign_in extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
    // this.emailChange = this.emailChange.bind(this);
    // this.passwordChange = this.passwordChange.bind(this);
  }

  render() {
    return (
      <Form>
        <Input type="text" name = "email "value={this.state.email} onChange={this.emailChange}/> <br/>
        <Input type="password" name = "password" value={this.state.password} onChange={this.passwordChange} /> <br/>
        <Button onClick={() => this.checkvalidation()} >Submit</Button>
      </Form>
    );
  }
}

  // emailChange(event) {
  //   this.setState({email: event.target.value});
  // }

  // passwordChange(event) {
  //   this.setState({password: event.target.value});
  // }

  // checkvalidation (props) {
  //   var apiBaseUrl = "http://localhost:3004/api/v1/";
  //   var self = this;
  //   var payload={
  //     "email":this.state.email,
  //     "password": this.state.password
  //   }
  //   axios.post(
  //     apiBaseUrl+'users/login',
export default Sign_in;