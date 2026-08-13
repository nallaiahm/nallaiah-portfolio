import { certifications } from '../data/portfolioData'
import Reveal from './Reveal'

export default function Certifications() {
  return (
    <section id="certifications" className="section section--tight">
      <div className="container">
        <Reveal>
          <span className="eyebrow"></span>
          <h2 className="section-title">Certifications</h2>
        </Reveal>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <Reveal delay={i % 3} key={cert.title} className="card cert-card">
              <div className="cert-card__icon" aria-hidden="true">
                ◆
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
