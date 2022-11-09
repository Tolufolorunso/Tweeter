import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/App.css';
import { AuthProvider } from './context/user/userContext';
import { TweetProvider } from './context/tweets/tweetContext';

// console.log(process.env.NODE_ENV);
import { StyleSheetManager } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <AuthProvider>
    <TweetProvider>
      <StyleSheetManager>
        <App />
      </StyleSheetManager>
    </TweetProvider>
  </AuthProvider>
);
 {/* <React.StrictMode> */}