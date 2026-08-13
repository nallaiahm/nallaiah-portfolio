import { experience } from '../data/portfolioData'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow"></span>
          <h2 className="section-title">Internships</h2>
          <p className="section-sub">Hands-on experience applying my skills in real teams.</p>
        </Reveal>

        <div className="timeline">
          {experience.map((exp, i) => (
            <Reveal delay={i} key={exp.company} className="timeline__item">
              <div className="timeline__marker" />
              <div className="card timeline__card">
                <div className="timeline__header">
                  <h3>{exp.role}</h3>
                  <span className="timeline__company">{exp.company}</span>
                </div>
                {exp.points.length > 0 && (
                  <ul className="timeline__points">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
