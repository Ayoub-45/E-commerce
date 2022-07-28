import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Apps/E-commerce/Components/pages/homepages/HomePage.Component'
import reportWebVitals from './reportWebVitals';
import './App.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <HomePage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
