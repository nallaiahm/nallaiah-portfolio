import useReveal from '../hooks/useReveal'

// Wraps children and fades/slides them up into view on scroll.
// Usage: <Reveal delay={1}><div>...</div></Reveal>
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay * 90}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
