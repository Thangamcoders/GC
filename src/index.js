import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles (optional, if you want to add custom styles)
import App from './App'; // Main App component
import { BrowserRouter as Router } from 'react-router-dom'; // If you're using React Router for routing

// Create root element for React 18+ versions (using the new root API)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with Router (for routing functionality)
root.render(
  <Router>
    <App />
  </Router>
);
