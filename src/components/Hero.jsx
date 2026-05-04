import { useEffect, useState } from 'react'
import heroImage from '../assets/hero-workspace.png'
import cvPdf from '../assets/docs/Anil-Jangid-CV.pdf'

export default function Hero({ showToast }) {
  const [counts, setCounts] = useState({ envs: 0, modes: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / 900, 1)
          setCounts({
            envs: Math.round(12 * progress),
            modes: Math.round(4 * progress),
          })
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.45 }
    )

    const metrics = document.querySelectorAll('[data-count-to]')
    metrics.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleDownload = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = cvPdf
    link.download = 'Anil-Jangid-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={heroImage}
        alt="Desk setup with laptop, notebook, and design tools"
      />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="eyebrow">Software Developer + QA Intern</p>
        <h1 id="hero-title">I build software like I test it.</h1>
        <p className="hero-lede">
          Patient with edge cases. Curious about AI systems. Focused on interfaces
          that behave correctly when real users take the long route.
        </p>
        <div className="identity-strip" aria-label="Current profile">
          <span>B.Tech CSE, 2022-2026</span>
          <span>Scaler AI Labs QA Intern</span>
          <span>Aurangabad, Maharashtra</span>
        </div>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Read Case Files
          </a>
          <a className="button glass" href={cvPdf} target="_blank" rel="noopener noreferrer">
            Open Resume
          </a>
          <button className="button glass" onClick={handleDownload}>
            Download Resume
          </button>
          <a
            className="button glass"
            href="https://in.linkedin.com/in/anil-jangid-a03992293"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Live portfolio summary">
        <div className="metric-card" data-count-to="12">
          <span>{counts.envs}</span>
          <p>RL replica environments signed off</p>
        </div>
        <div className="metric-card" data-count-to="4">
          <span>{counts.modes}</span>
          <p>testing modes: functional, UI, exploratory, regression</p>
        </div>
        <div className="metric-card terminal-card">
          <code>status --open-to-work</code>
          <p>developer roles, internships, AI/product teams</p>
        </div>
      </aside>
    </section>
  )
}
