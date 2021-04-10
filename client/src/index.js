import 'bootswatch/dist/darkly/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import reportWebVitals from './reportWebVitals';
import {initMiddleware,} from 'devise-axios'
<<<<<<< HEAD

=======
>>>>>>> e37702a83fb824cdbe7e630470e7403062a0f415

initMiddleware();

ReactDOM.render(
  <AuthProvider>
<<<<<<< HEAD

      <BrowserRouter>
        <App />
      </BrowserRouter>

=======
      <BrowserRouter>
        <App />
      </BrowserRouter>
>>>>>>> e37702a83fb824cdbe7e630470e7403062a0f415
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
