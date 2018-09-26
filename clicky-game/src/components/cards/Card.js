import React from 'react';

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    
    <span className="remove">𝘅</span>
  </div>
);

export default Card; 
