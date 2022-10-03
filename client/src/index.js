import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'normalize.css';
import './assets/css/App.css';
import { AuthProvider } from './context/auth/authContext';

// console.log(process.env.NODE_ENV);
import { StyleSheetManager } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StyleSheetManager>
        <App />
      </StyleSheetManager>
    </AuthProvider>
  </React.StrictMode>
);
