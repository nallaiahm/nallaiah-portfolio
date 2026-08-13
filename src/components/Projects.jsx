import { projects } from '../data/portfolioData'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow"></span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-sub">
            Projects where I applied AI, data and full stack development to solve real problems.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal
              delay={i}
              key={project.name}
              className={`card project-card ${project.featured ? 'project-card--featured' : ''}`}
            >
              <div className="project-card__glow" aria-hidden="true" />
              <h3 className="project-card__title">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>

              {project.features.length > 0 && (
                <ul className="project-card__features">
                  {project.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              )}

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-card__actions">
                <a
                  href={project.github || '#'}
                  target={project.github ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  {project.github ? 'View Code' : 'Code — add link'}
                </a>
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Live Demo
                  </a>
                ) : (
                  <span className="project-card__placeholder">Live demo — add link</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
