import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent.jsx';
import StatefullComponent from './container/StatefullContainer.jsx';

/*function Helloworld() {
    return <p>
      ini adalah function component
    </p>
}*/

/*const Helloworld = () => {
  return <p>
    Ini adalah arraw function
  </p>
}*/

/*class Statefullcomponent extends React.Component {
  render() {
    return <p>
      ini adalah Statefull component
    </p>
  }
}*/

ReactDOM.render(<HelloComponent/>, document.getElementById('root')); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ServiceWorker.unregister();
