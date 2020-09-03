import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div className="row">
      <Button buttonName="AC">AC</Button>
      <Button buttonName="+/-">+/-</Button>
      <Button buttonName="%">%</Button>
      <Button buttonName="÷">÷</Button>
    </div>
    <div className="row">
      <Button buttonName="7">7</Button>
      <Button buttonName="8">8</Button>
      <Button buttonName="9">9</Button>
      <Button buttonName="X">X</Button>
    </div>
    <div className="row">
      <Button buttonName="4">4</Button>
      <Button buttonName="5">5</Button>
      <Button buttonName="6">6</Button>
      <Button buttonName="-">-</Button>
    </div>
    <div className="row">
      <Button buttonName="1">1</Button>
      <Button buttonName="2">2</Button>
      <Button buttonName="3">3</Button>
      <Button buttonName="+">+</Button>
    </div>
    <div className="row">
      <Button buttonName="0">0</Button>
      <Button buttonName=".">.</Button>
      <Button buttonName="=">=</Button>
      <Button buttonName="" />
    </div>
  </div>
);

export default ButtonPanel;
