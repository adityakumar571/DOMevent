import './App.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <> 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> 
    </>
  )
}

export default App
