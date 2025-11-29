import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './Store/Store.js';
import { Provider } from 'react-redux';
import Counter from './features/counter/Counter.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
      <Counter />
    </StrictMode>
  </Provider>
);
