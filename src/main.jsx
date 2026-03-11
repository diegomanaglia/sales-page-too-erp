import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Lp2 from './lp2.jsx'
import Lp3 from './lp3.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lp2" element={<Lp2 />} />
        <Route path="/lp3" element={<Lp3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
