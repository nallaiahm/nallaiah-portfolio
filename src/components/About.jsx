import { about } from '../data/portfolioData'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow"></span>
          <h2 className="section-title">
            Currently building, <span className="text-gradient">always learning</span>
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={1} className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <div className="about__stats">
            {about.stats.map((stat, i) => (
              <Reveal delay={i + 2} key={stat.label} className="stat-card card">
                <span className="stat-card__value text-gradient">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
