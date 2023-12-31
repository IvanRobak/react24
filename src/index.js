import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context/Context';
import './index.css';

import App from './components/App';

import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Context>
        <App />
      </Context>
    </Provider>
  </BrowserRouter>
);
