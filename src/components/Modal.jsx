import { useEffect } from 'react'

export default function Modal({ isOpen, project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="modal-backdrop" onClick={onClose}></div>
      <article className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button
          className="modal-close"
          type="button"
          aria-label="Close project details"
          onClick={onClose}
        >
          ×
        </button>
        <p className="project-type">{project.type}</p>
        <h2 id="modal-title">{project.title}</h2>
        <div className="modal-copy" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
        <div className="modal-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>
    </div>
  )
}
