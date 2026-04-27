import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import logo from '../assets/logo.svg'

const Navbar = ({ theme, toggleTheme }) => {
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const active = (p) => pathname === p ? 'active' : ''

    return (
        <motion.header
            className="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container">
                <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="XOVOS Logo" style={{ height: '46px' }} />
                </Link>

                <nav className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
                    <Link to="/" className={active('/')} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/services" className={active('/services')} onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/portfolio" className={active('/portfolio')} onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <Link to="/about" className={active('/about')} onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className={active('/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
                </nav>

                <div className="nav-right">
                    <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    <Link to="/contact" className="btn btn-primary hide-mobile" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                        Start a Project
                    </Link>
                    <button className="theme-btn show-mobile" style={{ display: 'none' }} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>
        </motion.header>
    )
}

export default Navbar
