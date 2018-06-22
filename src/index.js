import _ from 'lodash';
import React from "react";
import ReactDOM from "react-dom";
import './style.css';

function component() {
  var element = document.createElement('div');

// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'Mehdi'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());


const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
