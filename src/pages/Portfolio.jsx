import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const PROJECTS = [
    {
        id: 1, cat: 'Web', title: 'Enterprise FinTech Dashboard',
        desc: 'A high-performance SaaS dashboard built with Next.js and Rust. Handles real-time transaction data with latency-optimized reporting and bank-grade security.',
        tags: ['React', 'Rust', 'PostgreSQL', 'Charts'],
        img: 'https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2, cat: 'Android', title: 'Smart IoT Mobile App',
        desc: 'Native Android application for device monitoring and control. Interfaces with 300k+ IoT units via MQTT with custom OTA firmware update tracking.',
        tags: ['Kotlin', 'Android SDK', 'MQTT', 'Go'],
        img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3, cat: 'AI', title: 'GenAI Automation Agent',
        desc: 'Custom-trained AI agent for enterprise support automation. Integrated with internal systems to provide context-aware responses and task automation.',
        tags: ['Python', 'OpenAI', 'FastAPI', 'LangChain'],
        img: 'https://images.unsplash.com/photo-1504868584819-f8e905b6cbe0?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4, cat: 'Web', title: 'E-Commerce Marketplace',
        desc: 'Full-stack marketplace with advanced search, multi-vendor support, and secure payment integration. optimized for 100k+ monthly active users.',
        tags: ['Next.js', 'Stripe', 'Node.js', 'Redis'],
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 5, cat: 'Android', title: 'Logistics Fleet Manager',
        desc: 'Real-time tracking and dispatching app for logistics fleets. Features custom Google Maps integration, route optimization, and driver telemetry.',
        tags: ['Android', 'Mapbox', 'Firebase', 'Real-time'],
        img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 6, cat: 'AI', title: 'Predictive Analytics Engine',
        desc: 'ML pipeline for financial forecasting. Analyzes market trends and historical data to provide real-time investment risk scores.',
        tags: ['PyTorch', 'Spark', 'Python', 'AWS'],
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 7, cat: 'Web', title: 'Universal Hotel Management',
        desc: 'Comprehensive property management system handling reservations, room assignments, and integrated billing.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 8, cat: 'Web', title: 'Restaurant POS & Management',
        desc: 'Complete restaurant solution with table management, kitchen ticketing, and real-time inventory tracking.',
        tags: ['Next.js', 'WebSockets', 'Redis'],
        img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 9, cat: 'Android', title: 'Gym & Club Management',
        desc: 'Member portal and administrative dashboard for fitness centers. Supports class scheduling and automated renewals.',
        tags: ['Android', 'Kotlin', 'Firebase'],
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 10, cat: 'Web', title: 'Hospital Management System',
        desc: 'Secure healthcare platform for patient records, appointment scheduling, and staff rostering (HIPAA compliant).',
        tags: ['React', 'Rust', 'PostgreSQL'],
        img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 11, cat: 'Android', title: 'Medicine Management App',
        desc: 'Pharmacy inventory and prescription management app with expiration tracking and automated supplier ordering.',
        tags: ['Android', 'Go', 'Scanner API'],
        img: 'https://images.unsplash.com/photo-1584308666744-24d5e4deffc6?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 12, cat: 'Web', title: 'Store Inventory System',
        desc: 'Multi-warehouse retail inventory management platform featuring barcode scanning and low-stock predictive alerts.',
        tags: ['Next.js', 'Express', 'MySQL'],
        img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800'
    }
]

const FILTERS = ['All', 'Web', 'Android', 'AI']

const Portfolio = () => {
    const [filter, setFilter] = useState('All')
    const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === filter)

    return (
        <div>
            {/* Hero */}
            <section className="section" style={{ paddingTop: '140px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{ maxWidth: '720px' }}
                    >
                        <span className="badge" style={{ marginBottom: '20px' }}>Portfolio</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem,7vw,4.5rem)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1.05, marginBottom: '20px' }}>
                            Platforms that <span className="text-grad">transform businesses</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            Explore our work across Web, Android, and AI. We build tailored solutions that solve real-world problems with engineering excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Grid */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
                        {FILTERS.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                style={{
                                    padding: '8px 20px', borderRadius: '9999px', border: '1px solid',
                                    borderColor: filter === f ? 'var(--indigo)' : 'var(--border)',
                                    background: filter === f ? 'rgba(99,102,241,0.1)' : 'var(--bg-card)',
                                    color: filter === f ? '#a5b4fc' : 'var(--text-secondary)',
                                    fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer',
                                    transition: 'all 0.2s', fontFamily: 'var(--font)'
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <motion.div className="portfolio-grid" layout>
                        <AnimatePresence>
                            {shown.map(p => (
                                <motion.div
                                    key={p.id} layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="project-card"
                                >
                                    <div className="project-thumb">
                                        <img src={p.img} alt={p.title} />
                                        <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                                            <span className="tag" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', borderColor: 'transparent' }}>{p.cat}</span>
                                        </div>
                                    </div>
                                    <div className="project-info">
                                        <h3 style={{ fontSize: '1.15rem' }}>{p.title}</h3>
                                        <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{p.desc}</p>
                                        <div className="project-tags">
                                            {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-banner">
                        <span className="badge" style={{ marginBottom: '20px' }}>Start Today</span>
                        <h2>Ready to build your <span className="text-grad">next platform?</span></h2>
                        <p style={{ maxWidth: '500px', margin: '0 auto 32px' }}>From AI agents to native Android apps, we have the engineering depth to make your vision a reality.</p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary btn-lg"><i className="fas fa-calendar-check"></i>&nbsp; Book Free Consultation</Link>
                            <a href="https://wa.me/917894944657" className="btn btn-secondary btn-lg"><i className="fab fa-whatsapp" style={{ color: '#22c55e' }}></i>&nbsp; WhatsApp Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
