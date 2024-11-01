import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ContactSection from './components/ContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Router>
      <div className="bg-primary text-white min-h-screen px-10 py-5">
      <Navbar />
      <div className="flex gap-10 justify-center">
        <Sidebar />
        <div className='w-[90rem] h-[70rem] bg-red-200 rounded-xl px-10 py-10'>
        <Routes>
          <Route  path="/" element={<AboutSection />} />
          <Route  path="/work" element={<WorkSection />} />
          <Route  path="/connect" element={<ContactSection />} />
        </Routes>
        </div>
      </div>
    </div>
  </Router>
    </>
  )
}

// Navbar.jsx
//     Sidebar.jsx
//     ProfileCard.jsx
//     AboutSection.jsx
//     WorkSection.jsx
//     ContactButton.jsx

export default App
