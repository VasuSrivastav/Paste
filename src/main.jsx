import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>,
)
