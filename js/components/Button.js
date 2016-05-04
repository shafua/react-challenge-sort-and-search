import React, { Component } from 'react';

const Button = ({text, update}) => {
  return (
    <button className="btn btn-default" onClick={update}>
      {text}
    </button>
  );
}


export default Button;
