import React, { Component } from "react";
// import logo from './logo.svg';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import "./App.css";
import { from } from "rxjs";

class App extends Component {
  render() {
    return (
      <Form className="login">
        <h1 className="text-center mb-4">Welcome</h1>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"></Input>
        </FormGroup>
        <Button className="btn-block btn-large btn-dark"> Login </Button>
        <div className="separator mt-3"> OR </div>
        <FacebookLoginButton className="mt-3 mb-2" />
        <div className="text-center">
          <a href="#"> Sign up</a>
          <span className="p-2"> | </span>
          <a href="#"> Forgot password</a>
        </div>
      </Form>
    );
  }
}

export default App;
