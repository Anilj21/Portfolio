import { useState, useEffect } from 'react'

export default function Header({ isScrolled, navOpen, onNavToggle, theme, onThemeChange }) {
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -52% 0px', threshold: 0 }
    )

    const sections = ['top', 'work', 'internship', 'skills', 'notes', 'contact']
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#internship', label: 'QA Log' },
    { href: '#skills', label: 'Stack' },
    { href: '#notes', label: 'Notes' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="Anil Jangid home">
        <span className="brand-mark">AJ</span>
        <span>Anil Jangid</span>
      </a>

      <nav className={`site-nav ${navOpen ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href.slice(1) ? 'is-active' : ''}
            onClick={() => onNavToggle(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="icon-button"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
        >
          <span className="theme-glyph" aria-hidden="true"></span>
        </button>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => onNavToggle(!navOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
