import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { storeADD } from './compuden/store/reducekho.js';
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={storeADD}>
      <App />
    </Provider>
  </BrowserRouter>
);
