import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
        document.body.setAttribute('data-theme', next)
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <Router basename={import.meta.env.BASE_URL}>
            {/* Global animated background */}
            <div className="page-bg">
                <div className="bg-blob" style={{
                    width: '800px', height: '800px',
                    top: '-200px', left: '-200px',
                    background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)'
                }} />
                <div className="bg-blob" style={{
                    width: '600px', height: '600px',
                    bottom: '-100px', right: '-100px',
                    background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
                    animationDelay: '-8s'
                }} />
            </div>

            <Navbar theme={theme} toggleTheme={toggleTheme} />

            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
