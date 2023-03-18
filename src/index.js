import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './context/ContextProvider';

ReactDOM.render(
  <ContextProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </ContextProvider>,
  document.getElementById('root'),
);