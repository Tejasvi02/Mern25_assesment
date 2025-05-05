import React, { Component } from 'react';
import "./app.css";
import Success from './Success';
import { UserSignIn } from './UserSignIn';
import { StudentSignIn } from './StudentSignIn';

export default class ApplicationComponent extends Component  {
  render() {
    return (
      <div>
        <h1>Welcome to the React App!</h1>
        {/*<Success />*/} {/*Commenting out for better visibility of signin features*/}
        <hr />
        <UserSignIn /> {/*UnControlled sign in*/}
        <hr />
        <StudentSignIn /> {/*Controlled sign in*/}
      </div>
    );
  }
}

