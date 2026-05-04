import { useState } from 'react'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')

  const skillPanels = {
    frontend: {
      title: 'Frontend',
      description:
        'HTML, CSS, JavaScript, React basics, Tailwind UI, responsive layouts, and practical interface polish.',
      width: '82%',
    },
    backend: {
      title: 'Backend',
      description:
        'Express.js, SQL fundamentals, Firebase authentication, API integration awareness, and local AI processing workflows.',
      width: '72%',
    },
    qa: {
      title: 'Quality Assurance',
      description:
        'Manual testing, exploratory testing, functional testing, regression verification, structured defect tickets, severity tracking, and final QA sign-off.',
      width: '88%',
    },
    tools: {
      title: 'Tools',
      description:
        'VS Code, Android Studio, Firebase, Label Studio, Microsoft Excel, Vercel, Ollama, and Ultralytics workflows.',
      width: '78%',
    },
  }

  const currentSkill = skillPanels[activeTab]

  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Stack</p>
          <h2 id="skills-title">Not a buzzword wall. A map of where I have touched the work.</h2>
        </div>
      </div>

      <div className="skills-shell">
        <div className="skill-tabs" role="tablist" aria-label="Skill groups">
          {Object.keys(skillPanels).map((key) => (
            <button
              key={key}
              className={`skill-tab ${activeTab === key ? 'is-active' : ''}`}
              type="button"
              role="tab"
              onClick={() => setActiveTab(key)}
            >
              {skillPanels[key].title}
            </button>
          ))}
        </div>

        <div className="skill-panel" data-skill-panel>
          <h3>{currentSkill.title}</h3>
          <p>{currentSkill.description}</p>
          <div className="skill-meter">
            <span style={{ width: currentSkill.width }}></span>
          </div>
        </div>
      </div>
    </section>
  )
}
