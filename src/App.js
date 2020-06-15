import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="form-box" style={{justifyContent:'center'}}>
      <Form className="login">
        <h1 className="text-center mb-4" style={{fontSize:'55px'}}>Welcome</h1>
        <FormGroup>
          <Label> <b>Email </b></Label>
          <Input type="email" placeholder="Email"></Input>
        </FormGroup>
        <FormGroup>
          <Label> <b>Password</b></Label>
          <Input type="password" placeholder="Password"></Input>
        </FormGroup>
        <Button className="btn-block btn-large btn-dark"> Login </Button>
        <div className="separator mt-3"> OR </div>
        <FacebookLoginButton />
        <div className="text-center">
          <a href=""> Sign up</a>
          <span className="p-2"> | </span>
          <a href=""> Forgot password</a>
        </div>
      </Form>
      </div>
    );
  }
}

export default App;
