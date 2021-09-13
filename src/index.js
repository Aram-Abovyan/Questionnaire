import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { powercode, foodex, ease } from './data/questions';

localStorage.setItem('foodex', JSON.stringify(foodex));
localStorage.setItem('powercode', JSON.stringify(powercode));
localStorage.setItem('ease', JSON.stringify(ease));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
