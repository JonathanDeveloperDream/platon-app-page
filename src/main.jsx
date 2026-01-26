import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RestaurantMenu from './components/RestaurantMenu'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RestaurantMenu />
  </StrictMode>,
)
