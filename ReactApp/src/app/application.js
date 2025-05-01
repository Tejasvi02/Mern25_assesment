import React, { Component } from 'react';
import "./app.css";
import Success from './Success';

export default class ApplicationComponent extends Component  {
  render() {
    return (
      <div>
        <h1>Welcome to the React App!</h1>
        <Success />
      </div>
    );
  }
}

