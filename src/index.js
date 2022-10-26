
import React from 'react';
import ReactDOM from 'react-dom/client';
import BillBoard from './BillBoard';
import NavigationBar from './NavigationBar';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//require('dotenv').config()

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style = 'background: #F0F0F0;';
root.render(
  <div>
    <NavigationBar />
    <BillBoard />
  </div>
);
