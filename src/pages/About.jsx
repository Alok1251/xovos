import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SKILLS = [
    { label: 'Distributed Systems & Backend Architecture', pct: 97 },
    { label: 'Cloud Native (K8s, Istio, Docker, Terraform)', pct: 95 },
    { label: 'Rust & Go Systems Programming', pct: 93 },
    { label: 'FinTech & PCI-Compliant Security', pct: 90 },
    { label: 'API Gateway & Service Mesh Design', pct: 95 },
    { label: 'Observability (Prometheus, Grafana, Jaeger)', pct: 88 },
]

const TECH_STACK = [
    { label: 'Rust', color: '#f97316' },
    { label: 'Go', color: '#22d3ee' },
    { label: 'C++', color: '#a78bfa' },
    { label: 'Kubernetes', color: '#3b82f6' },
    { label: 'Istio', color: '#6366f1' },
    { label: 'Envoy / Gloo', color: '#ec4899' },
    { label: 'PostgreSQL', color: '#86efac' },
    { label: 'Redis', color: '#f43f5e' },
    { label: 'gRPC', color: '#fbbf24' },
    { label: 'GraphQL', color: '#e879f9' },
    { label: 'AWS / GCP', color: '#22d3ee' },
    { label: 'Terraform', color: '#818cf8' },
    { label: 'Prometheus', color: '#f97316' },
    { label: 'Grafana', color: '#f59e0b' },
    { label: 'Docker', color: '#60a5fa' },
    { label: 'MQTT / WebSocket', color: '#34d399' },
]

const EXPERIENCE = [
    {
        role: 'Senior Software Engineer / Module Lead',
        company: 'iServeU Technologies',
        period: 'Feb 2023 – Present',
        type: 'FinTech Infrastructure & IoT Distributed Systems',
        highlights: [
            { metric: '20,000+ RPS', text: 'Distributed API Gateway in Go with 99.99% uptime using Leaky Bucket rate-limiting and Hystrix circuit breakers' },
            { metric: '12% failure reduction', text: 'SuperSwitch Gateway in Rust — dynamic routing engine monitoring 10+ payment aggregators in real-time' },
            { metric: '400% throughput boost', text: 'Re-architected IoT backend for 300,000+ units with Go Worker Pools and connection multiplexing' },
            { metric: '70% auth latency drop', text: 'PCI-compliant Card Vault with AES-256 GCM. Stateless RS256 JWT auth reduced latency from 150ms → 40ms' },
            { metric: '35% CPU reduction', text: 'Replaced Go crypto with Rust FFI via pprof + Jaeger profiling, stabilizing p99 latency under traffic spikes' },
            { metric: '50,000+ soundboxes', text: 'Voice-enabled IoT firmware with custom OTA system, cryptographic verification, and automated rollback' },
        ]
    }
]

const MESH_PROJECT = {
    title: 'Enterprise API Gateway & Service Mesh',
    subtitle: 'Cloud-Native Ingress & Mesh Governance',
    tech: ['Istio', 'Gloo Edge', 'OPA', 'Kubernetes', 'Envoy', 'mTLS', 'Jaeger'],
    highlights: [
        { icon: 'fa-network-wired', title: 'Ingress Architecture', text: 'Gloo Edge (Envoy-based) as primary API Gateway — request transformation, header manipulation, automated TLS termination' },
        { icon: 'fa-code-branch', title: 'Service Mesh Traffic Control', text: 'Istio VirtualServices & DestinationRules for Canary and Blue-Green deployments — reduced release risk by 80%' },
        { icon: 'fa-shield-halved', title: 'Global Authorization Mesh', text: 'OPA integrated with Istio Envoy sidecars — fine-grained auth policies across 50+ microservices, zero app-code changes' },
        { icon: 'fa-eye', title: 'mTLS + Observability', text: 'Zero-trust networking with mutual TLS globally. Real-time service maps and distributed traces in Jaeger — MTTR reduced 40%' },
    ]
}

const VALUES = [
    { icon: 'fa-microscope', color: '#22d3ee', title: 'Systems Depth First', desc: 'We don\'t just move fast — we understand the fundamentals. Every architectural decision is made with correctness, performance, and long-term maintenance in mind.' },
    { icon: 'fa-bolt', color: '#a5b4fc', title: 'Production-Proven Patterns', desc: 'Everything we recommend we have personally deployed and debugged at production scale — not from tutorials, but from real system failures and fixes.' },
    { icon: 'fa-lock', color: '#86efac', title: 'Security by Default', desc: 'From AES-256 Card Vaults to mTLS zero-trust meshes — security is never bolted on at the end. It is designed in from the first line.' },
    { icon: 'fa-handshake', color: '#f472b6', title: 'Radical Ownership', desc: 'You communicate directly with the architect building your system. No project managers, no account executives — just engineering.' },
]

const About = () => (
    <div>

        {/* ——— HERO ——— */}
        <section className="section" style={{ paddingTop: '140px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: '860px' }}
                >
                    <span className="badge" style={{ marginBottom: '20px' }}>Our Studio</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1.02, marginBottom: '24px' }}>
                        Senior systems engineering, <span className="text-grad">built for your business</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '700px', marginBottom: '32px' }}>
                        Xovos is founded by a Senior Software Engineer with hands-on production experience building
                        payment gateways, distributed systems, and cloud-native infrastructure at scale — the kind of
                        engineering that powers FinTech companies and IoT platforms serving hundreds of thousands of users.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-lg">Work With Us</Link>
                        <Link to="/portfolio" className="btn btn-secondary btn-lg">See Our Systems Work</Link>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* ——— CREDIBILITY STRIP ——— */}
        <section className="section-sm" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div className="container">
                <div className="responsive-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '24px', overflow: 'hidden' }}>
                    {[
                        { num: '20k+', label: 'Requests / sec', sub: 'Distributed API Gateway' },
                        { num: '300k+', label: 'IoT Units', sub: 'Backend scaled & maintained' },
                        { num: '50+', label: 'Microservices', sub: 'Under Istio + OPA governance' },
                        { num: '99.99%', label: 'Service Uptime', sub: 'With circuit-breaker patterns' },
                    ].map(s => (
                        <div key={s.label} style={{ background: 'var(--bg-base)', padding: '36px 28px' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-2px', background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '6px' }}>{s.num}</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '4px' }}>{s.label}</div>
                            <div style={{ fontSize: '0.775rem', color: 'var(--text-tertiary)' }}>{s.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ——— PROFESSIONAL EXPERIENCE ——— */}
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Experience</span>
                    <h2>Production systems <span className="text-grad">at real scale</span></h2>
                    <p>Not side projects. Real infrastructure. Real users. Real consequences when things break.</p>
                </div>

                {EXPERIENCE.map(exp => (
                    <motion.div
                        key={exp.role}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card"
                        style={{ marginBottom: '24px', padding: '40px' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{exp.role}</h3>
                                <p style={{ color: '#a5b4fc', fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <span className="badge" style={{ marginBottom: '6px', display: 'inline-flex' }}>{exp.period}</span>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{exp.type}</p>
                            </div>
                        </div>

                        <div style={{ height: '1px', background: 'var(--border)', margin: '24px 0' }}></div>

                        <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }}>
                            {exp.highlights.map(h => (
                                <div key={h.metric} style={{ display: 'flex', gap: '14px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                    <div style={{ flexShrink: 0, minWidth: '90px' }}>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#22d3ee', display: 'block' }}>{h.metric}</span>
                                    </div>
                                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{h.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* ——— KEY PROJECT: SERVICE MESH ——— */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="badge">Key Project · 2025</span>
                    <h2>{MESH_PROJECT.title}</h2>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-tertiary)' }}>{MESH_PROJECT.subtitle}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                        {MESH_PROJECT.tech.map(t => (
                            <span key={t} className="tag" style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>{t}</span>
                        ))}
                    </div>
                </div>

                <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }}>
                    {MESH_PROJECT.highlights.map((h, i) => (
                        <motion.div
                            key={h.title}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{ display: 'flex', gap: '16px' }}
                        >
                            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <i className={`fas ${h.icon}`} style={{ color: '#a5b4fc', fontSize: '1rem' }}></i>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{h.title}</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{h.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ——— TECH SKILLS ——— */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
                    <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <span className="badge" style={{ marginBottom: '20px' }}>Technical Skills</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', marginBottom: '16px', lineHeight: 1.1 }}>
                            Deep expertise, <span className="text-grad">proven in production</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
                            Every technology we use has been battle-tested under real production load — not sandboxed, not tutorial-level, but running live systems that cannot afford to fail.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {TECH_STACK.map(s => (
                                <span key={s.label} style={{ padding: '5px 12px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700, color: s.color }}>
                                    {s.label}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div>
                        {SKILLS.map((s, i) => (
                            <div key={s.label} style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '0.825rem', fontWeight: 600 }}>{s.label}</span>
                                    <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{s.pct}%</span>
                                </div>
                                <div style={{ height: '6px', background: 'var(--border)', borderRadius: '999px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${s.pct}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ height: '100%', borderRadius: '999px', background: 'var(--grad-brand)' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* ——— VALUES ——— */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="badge">Philosophy</span>
                    <h2>How we <span className="text-grad">think & build</span></h2>
                </div>
                <div className="values-grid">
                    {VALUES.map((v, i) => (
                        <motion.div key={v.title} className="card"
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                        >
                            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${v.color}15`, border: `1px solid ${v.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                <i className={`fas ${v.icon}`} style={{ color: v.color, fontSize: '1rem' }}></i>
                            </div>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>{v.title}</h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ——— FOUNDER ——— */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge">Founder</span>
                    <h2>The engineer <span className="text-grad">you'll work with</span></h2>
                </div>
                <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                    <div className="card responsive-flex-row" style={{ padding: '48px', display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                        <div style={{ flexShrink: 0 }}>
                            <a href="https://www.linkedin.com/in/alok-kumar-sahoo-253576208" target="_blank" rel="noreferrer" style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(99,102,241,0.3)', display: 'block' }}>
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Alok Kumar Sahoo" style={{ objectFit: 'cover', width: '100%', height: '100%', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                            </a>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>Alok Sahoo</h3>
                            <p style={{ color: '#a5b4fc', fontWeight: 600, fontSize: '0.85rem', marginBottom: '16px' }}>Founder · Senior Systems Engineer</p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.875rem', marginBottom: '20px' }}>
                                Currently a Senior Software Engineer at iServeU Technologies, building FinTech-grade distributed systems in Rust and Go. I designed payment gateways processing real transactions at 20,000 RPS, secured card vaults with AES-256 encryption, and governed cloud-native infrastructure across 50+ microservices with Istio and OPA.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.875rem', marginBottom: '24px' }}>
                                I founded Xovos to bring the same engineering rigour used inside enterprise FinTech companies to startups and businesses that deserve world-class software — not low-quality outsourced code.
                            </p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <a href="https://www.linkedin.com/in/alok-kumar-sahoo-253576208" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                                    <i className="fab fa-linkedin"></i>&nbsp; LinkedIn
                                </a>
                                <a href="#" className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                                    <i className="fab fa-github"></i>&nbsp; GitHub
                                </a>
                                <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                                    <i className="fas fa-calendar"></i>&nbsp; Book a Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ——— CTA ——— */}
        <section className="section">
            <div className="container">
                <div className="cta-banner">
                    <h2>Enterprise engineering, <span className="text-grad">startup speed</span></h2>
                    <p style={{ maxWidth: '560px', margin: '0 auto 36px' }}>
                        You get the same architecture patterns used at FinTech companies processing millions of transactions — without the enterprise price tag or the bureaucracy.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            <i className="fas fa-calendar-check"></i>&nbsp; Book Free Consultation
                        </Link>
                        <a href="https://wa.me/15551234567" className="btn btn-secondary btn-lg">
                            <i className="fab fa-whatsapp" style={{ color: '#22c55e' }}></i>&nbsp; WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default About
