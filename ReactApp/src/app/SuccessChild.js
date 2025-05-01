import React from 'react';

function SuccessChild(props) {
  return (
    <div className="child-container">
      <h2>Child Component</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Address:</strong> {props.address}</p>
      {props.story}
    </div>
  );
}

export default SuccessChild;
