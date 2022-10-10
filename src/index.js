
import React from 'react';
import ReactDOM from 'react-dom/client';
import BillBoard from './BillBoard';
import NavigationBar from './NavigationBar';
import './Index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <NavigationBar />
      <div className="alert alert-danger m-5" role="alert">
        CECI EST UNE VERSION DE TEST
      </div>
      <BillBoard />
    </div>
  </React.StrictMode>
);
