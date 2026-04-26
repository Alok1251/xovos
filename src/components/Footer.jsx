import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-top">
                <div className="footer-brand">
                    <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                        <img src={logo} alt="XOVOS Logo" style={{ height: '40px' }} />
                    </Link>
                    <p>High-performance software solutions for startups and enterprises. We engineer the future, one product at a time.</p>
                    <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
                        {[['fab fa-twitter', '#'], ['fab fa-linkedin', '#'], ['fab fa-github', '#'], ['fab fa-dribbble', '#']].map(([icon, href]) => (
                            <a key={icon} href={href} style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--bg-card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s', fontSize: '0.85rem' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                            >
                                <i className={icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/portfolio">Work</Link></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><Link to="/services">Web Development</Link></li>
                        <li><Link to="/services">Mobile Apps</Link></li>
                        <li><Link to="/services">Backend Systems</Link></li>
                        <li><Link to="/services">Cloud & DevOps</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:hello@xovos.tech">hello@xovos.tech</a></li>
                        <li><a href="tel:+15550001234">+1 (555) 000-1234</a></li>
                        <li><a href="#">Silicon Valley, CA</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <span>&copy; 2026 Xovos Technologies, Inc. All rights reserved.</span>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <a href="#" style={{ color: 'var(--text-tertiary)', fontSize: '0.825rem' }}>Privacy</a>
                    <a href="#" style={{ color: 'var(--text-tertiary)', fontSize: '0.825rem' }}>Terms</a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
