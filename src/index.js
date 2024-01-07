import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context/Context';
import './index.css';

import App from './components/App';

import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Context>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Context>
    </Provider>
  </BrowserRouter>
);
