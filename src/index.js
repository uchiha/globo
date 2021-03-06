import React from 'react';
import ReactDOM from 'react-dom';
// import './main-page.css';
import App from './main-page';
import reportWebVitals from './reportWebVitals';
// load bootstrap in this entrypoint file makes
// it available in the whole app, even child components
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
