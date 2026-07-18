import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from '@/App.jsx'
import '@/index.css'

// Register service worker early with periodic update checks
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    // New SW found — reload to activate it immediately
    updateSW(true)
  },
  onOfflineReady() {
    console.log('App ready for offline use')
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
