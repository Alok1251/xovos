import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.svg'

const Navbar = ({ theme, toggleTheme }) => {
    const { pathname } = useLocation()
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

                <nav className="nav-links">
                    <Link to="/" className={active('/')}>Home</Link>
                    <Link to="/services" className={active('/services')}>Services</Link>
                    <Link to="/portfolio" className={active('/portfolio')}>Portfolio</Link>
                    <Link to="/about" className={active('/about')}>About</Link>
                    <Link to="/contact" className={active('/contact')}>Contact</Link>
                </nav>

                <div className="nav-right">
                    <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                        Start a Project
                    </Link>
                </div>
            </div>
        </motion.header>
    )
}

export default Navbar
