import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.tsx'
import store from './app/store.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
