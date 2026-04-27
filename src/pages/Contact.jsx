import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', budget: '', message: '' })
    const [sent, setSent] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setSent(true)
    }

    return (
        <div>
            {/* Hero */}
            <section className="section" style={{ paddingTop: '140px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{ maxWidth: '640px' }}
                    >
                        <span className="badge" style={{ marginBottom: '20px' }}>Free Consultation</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1.02, marginBottom: '20px' }}>
                            Tell us about <span className="text-grad">your idea</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            Fill out the form or just shoot us a WhatsApp message. We respond within a few hours, and the consultation is <strong style={{ color: 'var(--text-primary)' }}>100% free</strong> — no commitment needed.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Body */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="contact-grid">

                        {/* Info Column */}
                        <div>
                            {/* Quick actions */}
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.8rem' }}>Reach us directly</h3>

                                <a href="https://wa.me/917894944657" className="contact-info-item" style={{ display: 'flex', textDecoration: 'none', marginBottom: '12px', transition: 'all 0.2s' }}>
                                    <div className="contact-icon" style={{ color: '#22c55e', background: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.2)' }}>
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div style={{ marginLeft: '12px' }}>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '2px' }}>WhatsApp — fastest reply</div>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.825rem' }}>+91 7894944657</div>
                                    </div>
                                    <i className="fas fa-arrow-right" style={{ marginLeft: 'auto', color: 'var(--text-tertiary)', alignSelf: 'center', fontSize: '0.75rem' }}></i>
                                </a>

                                <div className="contact-info-item" style={{ marginBottom: '12px' }}>
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div style={{ marginLeft: '12px' }}>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '2px' }}>Email</div>
                                        <a href="mailto:alok.sahoo.official@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '0.825rem', textDecoration: 'none' }}>alok.sahoo.official@gmail.com</a>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-icon"><i className="fas fa-clock"></i></div>
                                    <div style={{ marginLeft: '12px' }}>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '2px' }}>Response time</div>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.825rem' }}>Usually within 2–4 hours</div>
                                    </div>
                                </div>
                            </div>

                            {/* What to expect */}
                            <div style={{ padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px' }}>
                                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>What happens next?</h4>
                                {[
                                    { num: '1', text: 'We review your message and reply within a few hours' },
                                    { num: '2', text: 'We schedule a free 15-min video or voice call' },
                                    { num: '3', text: 'You get a written proposal with scope, timeline & fixed price' },
                                    { num: '4', text: 'You decide — zero pressure either way' }
                                ].map(step => (
                                    <div key={step.num} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.7rem', fontWeight: 800, color: '#a5b4fc' }}>{step.num}</div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, x: 32 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            style={{ padding: '40px' }}
                        >
                            {sent ? (
                                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                                        style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '1.8rem', color: '#22c55e' }}
                                    >
                                        <i className="fas fa-check"></i>
                                    </motion.div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>Message received! 🎉</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
                                        We will review your project details and get back to you within a few hours. Check your inbox!
                                    </p>
                                    <a href="https://wa.me/917894944657" className="btn btn-secondary">
                                        <i className="fab fa-whatsapp" style={{ color: '#22c55e' }}></i>&nbsp; Also ping us on WhatsApp
                                    </a>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit}>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '6px' }}>Tell us about your project</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '28px' }}>Takes 2 minutes. No commitment required.</p>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                        <div className="form-group">
                                            <label className="form-label">Your Name *</label>
                                            <input required className="form-input" placeholder="Alex Johnson" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email Address *</label>
                                            <input required type="email" className="form-input" placeholder="alex@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                        <div className="form-group">
                                            <label className="form-label">WhatsApp / Phone</label>
                                            <input type="tel" className="form-input" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Approximate Budget</label>
                                            <select className="form-input" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} style={{ cursor: 'pointer' }}>
                                                <option value="">Select a range</option>
                                                <option>Under $1,000</option>
                                                <option>$1,000 – $5,000</option>
                                                <option>$5,000 – $15,000</option>
                                                <option>$15,000+</option>
                                                <option>Not sure yet</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Describe Your Project *</label>
                                        <textarea
                                            required className="form-input" rows={5}
                                            placeholder="What are you building? Who is it for? What's your timeline? The more detail the better — we read every word."
                                            value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                            style={{ resize: 'vertical' }}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1rem', justifyContent: 'center', marginTop: '8px' }}>
                                        Send My Project Details &nbsp;<i className="fas fa-paper-plane" style={{ fontSize: '0.85rem' }}></i>
                                    </button>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
                                        <i className="fas fa-lock" style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}></i>
                                        <span style={{ fontSize: '0.775rem', color: 'var(--text-tertiary)' }}>Your information is private and will never be shared or sold.</span>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Strip */}
            <section className="section" style={{ borderTop: '1px solid var(--border)', paddingBottom: '80px' }}>
                <div className="container">
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>Common questions</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
                        {[
                            { q: 'Is the consultation really free?', a: 'Yes, completely. We\'ll have a 15-minute call, hear about your project, and give you honest advice — no strings attached.' },
                            { q: 'Do I pay anything upfront?', a: 'No. We send a proposal and only start work after you\'ve approved the scope and price in writing.' },
                            { q: 'How long will my project take?', a: 'A landing page can take 1 week. A full web app typically 4–8 weeks. We\'ll give you an exact timeline in your proposal.' }
                        ].map(faq => (
                            <div key={faq.q} className="card" style={{ padding: '24px' }}>
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px' }}>{faq.q}</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
