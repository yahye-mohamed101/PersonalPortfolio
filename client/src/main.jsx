import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/App.css';

const root = createRoot(document.getElementById('root')); // Create a root for React
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);