import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import axios from 'axios';

class Sign_in extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
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

  emailChange(event) {
    this.setState({email: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value});
  }
}
export default Sign_in;