import { useEffect, useState } from 'react'

export default function AboutModal({ isOpen, onClose }) {
  const [imageLoaded, setImageLoaded] = useState(true)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) setImageLoaded(true)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal is-open" aria-hidden={!isOpen}>
      <div className="modal-backdrop" onClick={onClose}></div>
      <article className="modal-card about-card" role="dialog" aria-modal="true" aria-labelledby="about-title">
        <button
          className="modal-close"
          type="button"
          aria-label="Close about details"
          onClick={onClose}
        >
          x
        </button>

        <div className="about-header">
          <div className={`about-avatar ${imageLoaded ? 'has-photo' : ''}`} aria-hidden="true">
            {imageLoaded && (
              <img
                src="/assets/profile-photo.png"
                alt=""
                onError={() => setImageLoaded(false)}
              />
            )}
            {!imageLoaded && <span>AJ</span>}
          </div>
          <div>
            <p className="project-type">About Me</p>
            <h2 id="about-title">Development is the direction. QA is the edge.</h2>
          </div>
        </div>

        <div className="modal-copy">
          <p>
            I am Anil Jangid, a CSE student and early-career developer aiming to grow in software
            development. Right now I am working as a QA intern, which is teaching me how real products
            break, how users move through flows, and how to explain issues clearly.
          </p>
          <p>
            I like building web apps because they combine interface thinking, logic, polish, and immediate
            user feedback. My goal is to bring that builder mindset together with QA discipline: practical
            features, cleaner flows, and fewer avoidable surprises.
          </p>
        </div>

        <div className="about-facts" aria-label="Personal highlights">
          <span>Development focused</span>
          <span>QA intern</span>
          <span>Web app builder</span>
          <span>Product flow thinker</span>
        </div>
      </article>
    </div>
  )
}
