import React, { Component } from 'react';
import SuccessChild from './SuccessChild';
import SuccessStory from './SuccessStory';

class Success extends Component {
  constructor(props) {
    super(props);
    this.name = "Tejas";
    this.address = "123, 33rd Avenue, Boston4";
  }

  render() {
    return (
      <div className="success-container">
        <h1>Success is not final, failure is not fatal.</h1>
        <h2>Failure is a stepping stone to success</h2>
        <h3>Keep pushing forward and learn every day!</h3>

        <SuccessChild 
          name={this.name} 
          address={this.address} 
          story={<SuccessStory name={this.name} />} 
        />
      </div>
    );
  }
}

export default Success;
