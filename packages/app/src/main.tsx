import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // StrictMode renders all components twice in dev mode. So, it's intended to do everything twice!
  // https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
