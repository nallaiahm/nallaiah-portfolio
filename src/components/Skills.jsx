import { skillCategories } from '../data/portfolioData'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section section--tight">
      <div className="container">
        <Reveal>
          <span className="eyebrow"></span>
          <h2 className="section-title">Technical Toolkit</h2>
          <p className="section-sub">
            A working set of languages, frameworks and fundamentals I use to design, build and debug software.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <Reveal delay={i % 3} key={cat.title} className="card skills__card">
              <h3 className="skills__category">{cat.title}</h3>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
