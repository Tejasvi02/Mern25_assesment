import React from 'react';

function SuccessStory(props) {
  return (
    <div className="story-container">
      <h4>Success Story</h4>
      <p>{props.name} started with zero knowledge of React but ended up building amazing web apps.</p>
    </div>
  );
}

export default SuccessStory;
