import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SERVICES = [
    {
        icon: 'fa-globe', color: '#6366f1',
        title: 'Web Development',
        tagline: 'From landing page to global platform',
        desc: 'We build performant, beautiful web products that serve millions of users. Every component is engineered for speed, accessibility, and growth.',
        items: ['Custom React & Next.js Applications', 'SaaS Platform Architecture', 'E-commerce & Marketplace Systems', 'CMS & Content Workflows', 'API Integration & Third-party Services']
    },
    {
        icon: 'fa-mobile-screen-button', color: '#8b5cf6',
        title: 'Mobile Engineering',
        tagline: 'Native-grade apps on every device',
        desc: 'Apps that feel premium and perform reliably at scale. We use React Native and Flutter to ship once and cover both iOS and Android markets.',
        items: ['React Native & Flutter', 'Native iOS (Swift) & Android (Kotlin)', 'App Store Optimization & Submission', 'Push Notifications & Real-Time Data', 'Offline-First Architecture']
    },
    {
        icon: 'fa-server', color: '#22d3ee',
        title: 'Backend & API Systems',
        tagline: 'The engine powering your product',
        desc: 'Scalable microservices and monoliths built to handle millions of requests per day. Clean architecture that your team can understand and extend.',
        items: ['Node.js, Go & Python APIs', 'REST, GraphQL & WebSocket', 'Database Design (SQL / NoSQL)', 'Authentication & Authorization', 'Real-Time & Event-Driven Systems']
    },
    {
        icon: 'fa-cloud', color: '#ec4899',
        title: 'Cloud & DevOps',
        tagline: 'Ship faster, scale infinitely',
        desc: 'We automate your entire infrastructure so you spend less time on ops and more time building. 99.9% uptime, global CDN, zero-downtime deployments.',
        items: ['AWS, GCP & Azure Setup', 'Docker & Kubernetes', 'CI/CD Pipeline Automation', 'Infrastructure as Code (Terraform)', 'Monitoring, Alerting & Cost Optimization']
    }
]

const Services = () => (
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
                    <span className="badge" style={{ marginBottom: '20px' }}>Capabilities</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem,7vw,4.5rem)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1.05, marginBottom: '24px' }}>
                        Software built for <span className="text-grad">sustained scale</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px', marginBottom: '36px' }}>
                        We don't just write code — we engineer digital systems that power businesses for years, not months.
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Discuss Your Project</Link>
                </motion.div>
            </div>
        </section>

        {/* Services Detail */}
        <section className="section" style={{ borderTop: '1px solid var(--border)', paddingTop: '80px' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {SERVICES.map((svc, i) => (
                        <motion.div
                            key={svc.title}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '64px',
                                alignItems: 'center',
                                direction: i % 2 !== 0 ? 'rtl' : 'ltr'
                            }}
                        >
                            {/* Info */}
                            <div style={{ direction: 'ltr' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '16px', background: `${svc.color}1a`, border: `1px solid ${svc.color}33`, marginBottom: '24px' }}>
                                    <i className={`fas ${svc.icon}`} style={{ color: svc.color, fontSize: '1.3rem' }}></i>
                                </div>
                                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: svc.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{svc.tagline}</p>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '16px' }}>{svc.title}</h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>{svc.desc}</p>
                                <ul className="service-list">
                                    {svc.items.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </div>

                            {/* Visual Card */}
                            <div style={{ direction: 'ltr' }}>
                                <div className="card" style={{ background: `linear-gradient(135deg, ${svc.color}0a 0%, transparent 100%)`, borderColor: `${svc.color}22`, padding: '48px', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div style={{ fontSize: '3.5rem' }}>
                                        <i className={`fas ${svc.icon}`} style={{ color: svc.color, opacity: 0.3 }}></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', color: svc.color, marginBottom: '8px' }}>Enterprise-Grade</div>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{svc.title} solutions crafted for growth.</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="section">
            <div className="container">
                <div className="cta-banner">
                    <h2>Let's build it <span className="text-grad">together</span></h2>
                    <p>Tell us about your project and we'll respond within 24 hours.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Start a Conversation</Link>
                </div>
            </div>
        </section>
    </div>
)

export default Services
