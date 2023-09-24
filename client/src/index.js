import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { stopReportingRuntimeErrors } from "react-error-overlay";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
