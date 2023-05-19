import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from './constants/firebase'

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App/>     
      </BrowserRouter>
  </React.StrictMode>
);


