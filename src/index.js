import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route>
      <App />
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
