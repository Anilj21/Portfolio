import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Skills from './components/Skills'
import Notes from './components/Notes'
import Contact from './components/Contact'
import Modal from './components/Modal'
import AboutModal from './components/AboutModal'
import Toast from './components/Toast'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })
  const [navOpen, setNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen)
    document.body.classList.toggle('modal-open', modalOpen || aboutOpen)
  }, [navOpen, modalOpen, aboutOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(null), 1800)
  }

  return (
    <div className="app">
      <Header
        isScrolled={isScrolled}
        navOpen={navOpen}
        onNavToggle={setNavOpen}
        onProfileClick={() => setAboutOpen(true)}
        theme={theme}
        onThemeChange={setTheme}
      />
      <main id="top">
        <Hero showToast={showToast} />
        <Profile onProfileClick={() => setAboutOpen(true)} />
        <Projects onProjectClick={(project) => {
          setSelectedProject(project)
          setModalOpen(true)
        }} />
        <Internship />
        <Skills />
        <Notes />
        <Contact showToast={showToast} />
      </main>
      {selectedProject && (
        <Modal
          isOpen={modalOpen}
          project={selectedProject}
          onClose={() => {
            setModalOpen(false)
            setSelectedProject(null)
          }}
        />
      )}
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      {toast && <Toast message={toast} />}
    </div>
  )
}

export default App
