import { useState } from 'react'
import { profile } from '../data/portfolioData'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Static site — no backend. Opens the user's email client pre-filled
  // with the message instead of submitting anywhere.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow"></span>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-sub">
            Open to internships, campus placements and full stack developer roles. Reach out any time.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal delay={1} className="card contact__info">
            <a href={`mailto:${profile.email}`} className="contact__info-row">
              <span className="contact__info-label">Email</span>
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="contact__info-row">
              <span className="contact__info-label">Phone</span>
              <span>{profile.phone}</span>
            </a>
            <div className="contact__info-row">
              <span className="contact__info-label">Location</span>
              <span>{profile.location}</span>
            </div>

            <div className="contact__socials">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                GitHub
              </a>
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                LeetCode
              </a>
            </div>
          </Reveal>

          <Reveal delay={2} className="card contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" required value={form.name} onChange={handleChange} />
              </label>
              <label>
                Email
                <input type="email" name="email" required value={form.email} onChange={handleChange} />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" required value={form.message} onChange={handleChange} />
              </label>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              <p className="contact__form-note">Opens your email app with this message pre-filled.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
