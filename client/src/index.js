import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WorkOutContex from './Contex/WorkOutContex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <WorkOutContex>
    <App />
  </WorkOutContex>
    
  // </React.StrictMode>
);

