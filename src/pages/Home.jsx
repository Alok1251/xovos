import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
})

const TECHS = ['React', 'Next.js', 'Rust', 'Go', 'Android', 'Flutter', 'Python', 'OpenAI', 'PyTorch', 'PostgreSQL', 'AWS', 'Kubernetes']

const SERVICES_DATA = [
    { icon: 'fa-globe', color: '#6366f1', title: 'Web Development', desc: 'Modern, high-performance web applications built for speed and SEO.', items: ['Next.js / React Platforms', 'E-commerce Solutions', 'SaaS Dashboards', 'PWAs'] },
    { icon: 'fa-mobile-screen', color: '#8b5cf6', title: 'Mobile Engineering', desc: 'Android & iOS apps with native performance and premium UI.', items: ['Native Android (Kotlin)', 'Cross-platform (Flutter)', 'React Native Apps', 'IoT Integration'] },
    { icon: 'fa-brain', color: '#22d3ee', title: 'AI & Data Solutions', desc: 'Integrating LLMs and custom ML models into your business workflow.', items: ['Generative AI / LLM Ops', 'Predictive Analytics', 'Computer Vision', 'Automation Agents'] },
    { icon: 'fa-server', color: '#ec4899', title: 'Cloud & Scale', desc: 'Enterprise-grade infrastructure for apps that never go down.', items: ['High-Scale Backends', 'Kubernetes / DevOps', 'Payment Gateways', 'System Performance'] }
]

const STATS_DATA = [
    { num: '50+', label: 'Digital Products' },
    { num: '24/7', label: 'Systems Monitoring' },
    { num: 'High', label: 'Conversion Rate' },
    { num: 'AI-Native', label: 'Future Proof' }
]

const CASE_STUDIES = [
    {
        title: 'FinTech Cloud Platform', cat: 'Web / FinTech',
        desc: 'High-performance dashboard for financial transactions with real-time analytics and bank-grade security.',
        tags: ['Next.js', 'Rust', 'Postgres'],
        img: 'https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'Smart IoT Mobile App', cat: 'Android / iOS',
        desc: 'Full-featured mobile application connecting to 300k+ hardware units with push notifications and live monitoring.',
        tags: ['Android', 'Go', 'MQTT'],
        img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'AI Automation Agent', cat: 'AI / LLM',
        desc: 'Custom-trained LLM agent for enterprise support automation, reducing manual overhead by 40%.',
        tags: ['Python', 'OpenAI', 'FastAPI'],
        img: 'https://images.unsplash.com/photo-1504868584819-f8e905b6cbe0?auto=format&fit=crop&q=80&w=800'
    }
]

/* ─────────────────────────────────────────────
   HERO VISUAL — ULTRA PREMIUM MOCKUP
   ───────────────────────────────────────────── */
const HeroVisual = () => (
    <div style={{ position: 'relative', width: '100%', height: '560px', flexShrink: 0 }}>
        {/* Deep Glow background */}
        <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
            filter: 'blur(50px)', pointerEvents: 'none'
        }} />

        {/* Primary Browser Window (Glassmorphism) */}
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 5, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'absolute', top: '20px', left: '0', right: '40px',
                background: 'rgba(17,24,39,0.7)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px', padding: '0',
                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
                overflow: 'hidden'
            }}
        >
            {/* Browser Navbar */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#febc2e' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }} />
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', height: '24px', borderRadius: '6px', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', paddingLeft: '12px', letterSpacing: '0.5px' }}>
                    analytics.xovos.ai
                </div>
            </div>

            <div style={{ padding: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ height: '32px', width: '32px', borderRadius: '10px', background: 'var(--grad-brand)', marginBottom: '12px' }} />
                        <div style={{ height: '8px', width: '60%', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '8px' }} />
                        <div style={{ height: '8px', width: '40%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                            {[1, 2, 3, 4].map(i => <div key={i} style={{ flex: 1, height: '40px', background: 'rgba(99,102,241,0.2)', borderRadius: '4px' }} />)}
                        </div>
                        <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                    </div>
                </div>
                <div style={{ height: '140px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px dotted rgba(255,255,255,0.1)', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ height: '8px', width: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '4px' }} />
                                <div style={{ height: '6px', width: '50px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-check" style={{ color: '#22d3ee', fontSize: '0.7rem' }}></i>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ flex: 1, height: '40px', background: 'var(--grad-brand)', borderRadius: '10px', opacity: 0.6 }} />
                        <div style={{ flex: 1, height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }} />
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Phone Mockup (Ultra Realistic) */}
        <motion.div
            initial={{ opacity: 0, x: 60, y: 40, rotateZ: 5 }}
            animate={{ opacity: 1, x: 0, y: 0, rotateZ: -5 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'absolute', bottom: '-40px', right: '-10px',
                width: '240px', height: '480px',
                background: '#090c13',
                border: '8px solid #1a1e26',
                borderRadius: '44px', padding: '16px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,0,0,0.5)',
                zIndex: 5
            }}
        >
            {/* Screen */}
            <div style={{ height: '100%', borderRadius: '32px', background: 'linear-gradient(180deg, #111827, #0b0f19)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', overflow: 'hidden' }}>
                <div style={{ width: '50px', height: '4px', background: 'rgba(0,0,0,1)', borderRadius: '10px', position: 'absolute', top: '24px', left: '50%', transform: 'translateX(-50%)', border: '1px solid rgba(255,255,255,0.1)' }} />
                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '16px', background: 'var(--grad-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fas fa-bolt" style={{ color: '#fff' }}></i>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                        </div>
                    </div>
                    <div style={{ height: '14px', width: '90%', background: 'rgba(255,255,255,0.8)', borderRadius: '6px', marginBottom: '12px' }} />
                    <div style={{ height: '14px', width: '50%', background: 'rgba(255,255,255,0.3)', borderRadius: '6px', marginBottom: '48px' }} />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ height: '56px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '12px' }}>
                                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)' }} />
                                <div style={{ height: '8px', width: '60%', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* AI Badge (Enhanced) */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'absolute', top: '-10px', right: '120px',
                background: 'rgba(17,24,39,0.95)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34,211,238,0.4)', borderRadius: '18px',
                padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 20px rgba(34,211,238,0.2)', zIndex: 10
            }}
        >
            <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#fff',
                boxShadow: '0 0 15px rgba(34,211,238,0.4)'
            }}>
                <i className="fas fa-brain" />
            </div>
            <div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Intelligent Ops</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>LLM Agents active</div>
            </div>
        </motion.div>
    </div>
)

/* ─────────────────────────────────────────────
   HOME PAGE
   ───────────────────────────────────────────── */
const Home = () => (
    <div>

        {/* ══════════════ HERO ══════════════ */}
        <section style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            paddingTop: 'calc(var(--nav-h) + 40px)', overflow: 'hidden', position: 'relative',
            paddingBottom: '80px'
        }}>
            <div className="container">
                <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) 1fr', gap: '80px', alignItems: 'center' }}>

                    {/* Left */}
                    <div>
                        <motion.div {...fadeUp(0)} style={{ marginBottom: '24px' }}>
                            <span className="badge" style={{ padding: '8px 16px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
                                <i className="fas fa-code" style={{ marginRight: '8px' }}></i> Software Solutions Studio
                            </span>
                        </motion.div>

                        <motion.h1 {...fadeUp(0.1)} style={{
                            fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900,
                            lineHeight: 0.95, letterSpacing: '-4px', marginBottom: '28px'
                        }}>
                            We Build <br />
                            <span className="text-grad" style={{ paddingBottom: '10px', display: 'inline-block' }}>Exceptional</span> <br />
                            <span style={{ color: '#fff' }}>Software.</span>
                        </motion.h1>

                        <motion.p {...fadeUp(0.2)} style={{
                            fontSize: '1.25rem', lineHeight: 1.6,
                            color: 'var(--text-secondary)', maxWidth: '540px', marginBottom: '40px',
                            fontWeight: 450
                        }}>
                            Engineering studio specializing in premium <strong>Web</strong>, <strong>Android</strong>, and <strong>AI-powered</strong> platforms that scale with your ambition.
                        </motion.p>

                        <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                            <Link to="/contact" className="btn btn-primary btn-lg" style={{ minWidth: '220px', justifyContent: 'center' }}>
                                Kickoff Your Project &nbsp;<i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                            </Link>
                            <Link to="/portfolio" className="btn btn-secondary btn-lg" style={{ minWidth: '200px', justifyContent: 'center' }}>See Case Studies</Link>
                        </motion.div>

                        <motion.div {...fadeUp(0.45)} className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '600px' }}>
                            {[
                                { icon: 'fa-globe', text: 'Scalable Full-Stack Web' },
                                { icon: 'fa-mobile-android', text: 'Native Android Apps' },
                                { icon: 'fa-microchip', text: 'AI & LLM Integration' },
                                { icon: 'fa-server', text: 'Enterprise Infrastructure' }
                            ].map(item => (
                                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className={`fas ${item.icon}`} style={{ fontSize: '0.75rem', color: '#a5b4fc' }}></i>
                                    </div>
                                    <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Visual */}
                    <motion.div
                        className="hide-mobile"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ position: 'relative' }}
                    >
                        <HeroVisual />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* ══════════════ MARQUEE ══════════════ */}
        <div className="marquee-section">
            <p className="marquee-label">Engineered with modern industry standards</p>
            <div style={{ display: 'flex', overflow: 'hidden' }}>
                <div className="marquee-track">
                    {[...TECHS, ...TECHS].map((t, i) => (
                        <span key={i} className="marquee-item">
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--indigo)', display: 'inline-block' }}></span>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* ══════════════ STATS ══════════════ */}
        <section className="section">
            <div className="container">
                <div className="stats-grid">
                    {STATS_DATA.map((s) => (
                        <div key={s.label} className="stat-item">
                            <div className="stat-num">{s.num}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ══════════════ SERVICES ══════════════ */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <motion.div className="section-header"
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                >
                    <span className="badge">Our Capabilities</span>
                    <h2>Full-spectrum <span className="text-grad">Engineering</span></h2>
                    <p>We build everything from high-converting landing pages to complex distributed systems.</p>
                </motion.div>
                <div className="services-grid">
                    {SERVICES_DATA.map((svc, i) => (
                        <motion.div key={svc.title} className="card service-card"
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <div className="service-icon"><i className={`fas ${svc.icon}`} style={{ color: '#a5b4fc' }}></i></div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{svc.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>{svc.desc}</p>
                            <ul className="service-list">{svc.items.map(item => <li key={item}>{item}</li>)}</ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ══════════════ CASE STUDIES ══════════════ */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div className="flex-between section-header" style={{ flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <span className="badge">Proven Experience</span>
                        <h2 style={{ marginBottom: '8px' }}>Recent <span className="text-grad">Deployments</span></h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>A selection of platforms built for performance and scale.</p>
                    </div>
                    <Link to="/portfolio" className="btn btn-secondary">View Full Portfolio</Link>
                </div>
                <div className="portfolio-grid">
                    {CASE_STUDIES.map((p, i) => (
                        <motion.div key={p.title} className="project-card"
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                        >
                            <div className="project-thumb">
                                <img src={p.img} alt={p.title} />
                                <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                                    <span className="tag" style={{ background: 'rgba(99,102,241,0.3)', borderColor: 'rgba(99,102,241,0.4)', color: '#a5b4fc', backdropFilter: 'blur(8px)', padding: '6px 12px' }}>{p.cat}</span>
                                </div>
                            </div>
                            <div className="project-info" style={{ padding: '24px' }}>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{p.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>{p.desc}</p>
                                <div className="project-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ══════════════ FINAL CTA ══════════════ */}
        <section className="section">
            <div className="container">
                <motion.div className="cta-banner"
                    initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                    style={{ padding: '80px 40px' }}
                >
                    <span className="badge" style={{ marginBottom: '20px' }}>Available for Q3 2026</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Your project deserves <br /><span className="text-grad">World-Class Engineering.</span></h2>
                    <p style={{ maxWidth: '560px', margin: '0 auto 48px', fontSize: '1.1rem', opacity: 0.8 }}>
                        Whether you are building a new SaaS platform, a native Android app, or integrating AI — we have the expertise to make it flawless.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-lg" style={{ minWidth: '220px' }}>
                            Kickoff Free Consultation
                        </Link>
                        <a href="https://wa.me/917894944657" className="btn btn-secondary btn-lg" style={{ minWidth: '180px' }}>
                            <i className="fab fa-whatsapp" style={{ color: '#22c55e' }}></i>&nbsp; WhatsApp Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
)

export default Home
