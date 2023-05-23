import React from 'react';
import ReactDOM from 'react-dom/client';
import FeedBackApp from 'components/App';
import { GlobalStyle } from 'components/Style/Global';
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <FeedBackApp />
  </React.StrictMode>
);
