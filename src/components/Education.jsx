import { education } from '../data/portfolioData'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="section section--tight">
      <div className="container">
        <Reveal>
          <span className="eyebrow"></span>
          <h2 className="section-title">Education</h2>
        </Reveal>

        <div className="edu-list">
          {education.map((edu, i) => (
            <Reveal delay={i} key={edu.degree} className="card edu-card">
              <div className="edu-card__top">
                <h3>{edu.degree}</h3>
                {edu.current && <span className="edu-card__badge">In Progress</span>}
              </div>
              <p className="edu-card__institution">{edu.institution}</p>
              <div className="edu-card__meta">
                <span>{edu.detail}</span>
                <span>{edu.period}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
