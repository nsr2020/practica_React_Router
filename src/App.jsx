import {Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import NotFound from "./Pages/404/NotFound"

function App() {
 

  return (
  
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

      </div>

  )
}

export default App
