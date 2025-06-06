import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Layout from "../src/Layout/Layout.jsx"
import About from './Pages/About.jsx'
import Everworld from './Pages/everworld/Everworld.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<App/>}/>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/everworld" element={<Everworld/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
