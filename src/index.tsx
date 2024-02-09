import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LanguageContext } from './LanguageContext';
import { dictionaryList } from './languages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<LanguageContext.Provider value={{language:dictionaryList}}>
  <App />
  </LanguageContext.Provider>);