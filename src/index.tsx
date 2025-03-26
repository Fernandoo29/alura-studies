import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import TarefasProvider from './contexts/TarefasContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TarefasProvider>
      <App />
    </TarefasProvider>
  </React.StrictMode>
);
