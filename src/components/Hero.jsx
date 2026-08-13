import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'
import profileImg from '../assets/profile.jpeg'
import resumeFile from '../assets/resume.pdf'

const ROLES = [
  'Software Engineer',
  'C Programmer',
  'Problem Solver',
  'Full Stack Developer',
]

function useTypewriter(words, { typeSpeed = 55, deleteSpeed = 30, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setText(words[0])
      return
    }

    const current = words[index % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content reveal is-visible">
          <div className="hero__terminal" role="text">
            <div className="hero__terminal-bar">
              <span /><span /><span />
              <span className="hero__terminal-path">~/portfolio</span>
            </div>
            <div className="hero__terminal-body">
              <p className="hero__prompt">
                <span className="hero__prompt-symbol">$</span> whoami
              </p>
              <h1 className="hero__name">{profile.name}</h1>
              <p className="hero__role">
                <span className="hero__prompt-symbol">&gt;</span>{' '}
                <span className="text-gradient">{typed}</span>
                <span className="hero__cursor">|</span>
              </p>
            </div>
          </div>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href={resumeFile} download="Nallaiah-M-Resume.pdf" className="btn btn-ghost">
              Download Resume
            </a>
          </div>

          <div className="hero__socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              LeetCode
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap reveal is-visible">
          <div className="hero__photo-ring">
            <img src={profileImg} alt={`Portrait of ${profile.name}`} className="hero__photo" />
          </div>
          <div className="hero__badge hero__badge--1">B.E CSE '27</div>
          <div className="hero__badge hero__badge--2">CGPA 9.087</div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
