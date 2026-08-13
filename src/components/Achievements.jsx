import { achievements } from '../data/portfolioData'
import Reveal from './Reveal'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow"></span>
          <h2 className="section-title">Achievements &amp; Simulations</h2>
        </Reveal>

        <div className="achieve-list">
          {achievements.map((item, i) => (
            <Reveal delay={i} key={item.title} className="card achieve-card">
              <div className="achieve-card__header">
                <h3>{item.title}</h3>
                <span className="achieve-card__org">{item.org}</span>
              </div>
              {item.points.length > 0 && (
                <ul>
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
