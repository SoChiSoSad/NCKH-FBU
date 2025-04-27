import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from "react-scroll-parallax";
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <AuthProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </AuthProvider>
  </BrowserRouter>
  </Provider>,
  
);