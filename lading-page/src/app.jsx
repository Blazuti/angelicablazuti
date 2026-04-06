import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './pages/category'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
