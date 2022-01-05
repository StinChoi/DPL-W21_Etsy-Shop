import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from "devise-axios";
import 'antd/dist/antd.css';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Under Initmiddleware();
// James found this somewhere in headers while inspecting to make logout successful? Try and see if he can touch base on this
      // let headers = res.headers;
      // axios.defaults.headers.common["access-token"] = headers["access-token"];
      // axios.defaults.headers.common["token-type"] = headers["token-type"];
      // axios.defaults.headers.common["client"] = headers["client"];
      // axios.defaults.headers.common["expiry"] = headers["expiry"];
      // axios.defaults.headers.common["uid"] = headers["uid"];
// to bypass being able to log out (was used as a demo under handleLogin)