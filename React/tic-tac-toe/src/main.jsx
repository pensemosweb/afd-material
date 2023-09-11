import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppErrorBoundary from './AppErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary fallbackComponent={<p>Something went wrong</p>}>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>,
)
