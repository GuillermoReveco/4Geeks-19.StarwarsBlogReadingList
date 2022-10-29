import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import PeopleContext from './store/PeopleStore';
import PlanetsContext from './store/PlanetsStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PlanetsContext>
  <PeopleContext>
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </PeopleContext>
  </PlanetsContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
