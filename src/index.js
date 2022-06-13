import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import css in order
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrOMIx7smmvl4DfBhoA4P7e4qLR4-vQuU",
  authDomain: "react-proyecto-d5e27.firebaseapp.com",
  projectId: "react-proyecto-d5e27",
  storageBucket: "react-proyecto-d5e27.appspot.com",
  messagingSenderId: "251552338924",
  appId: "1:251552338924:web:6997a3732106b7ea8466c9",
  measurementId: "G-ZCDFXS1N6H"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
