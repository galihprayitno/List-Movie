import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/main'


const root = ReactDOM.createRoot(document.getElementById('root'));

// Menampilkan output website 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);