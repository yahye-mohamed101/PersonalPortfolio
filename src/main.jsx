
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App /> {/* App contains the Routes and should not wrap another Router */}
  </Router>
);