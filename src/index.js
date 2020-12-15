import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/bootstrap.rtl.only.min.css";
//import "./assets/css/animate.min.css";
import "./assets/css/sass/themes/piaf.light.blueolympic.scss";
import "./assets/fonts/simple-line-icons/css/simple-line-icons.css";
//import "./assets/css/demo.css";
//import "./assets/css/pe-icon-7-stroke.css";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
