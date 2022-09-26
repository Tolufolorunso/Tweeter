import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'normalize.css';
import './assets/css/App.css';
import { AppProvider } from './context/auth/authContext';

// console.log(process.env.NODE_ENV);
import { StyleSheetManager } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <StyleSheetManager>
        <App />
      </StyleSheetManager>
    </AppProvider>
  </React.StrictMode>
);
