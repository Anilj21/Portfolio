import { useState } from 'react'

export default function Projects({ onProjectClick }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 'smartdocs',
      type: 'Case 01 / AI Web App',
      title: 'SmartDocs',
      description:
        'Built a local-first document assistant for summaries and quiz generation, with auth and a clean study workflow.',
      tags: ['React', 'Express.js', 'Ollama', 'Firebase'],
      category: 'ai web',
      visual: 'smartdocs',
      fullDescription: `
        <p><strong>Problem:</strong> Students and readers often need quick summaries and revision questions without sending private documents to a cloud service.</p>
        <p><strong>My work:</strong> Developed a web app using React, Express.js, Ollama, Firebase authentication, and Tailwind UI for document summarization, quiz generation, and local data processing.</p>
        <p><strong>Why it matters:</strong> It connects full-stack development with practical AI workflows and keeps the user experience focused on study outcomes.</p>
      `,
    },
    {
      id: 'yolov8',
      type: 'Case 02 / Computer Vision',
      title: 'YOLOv8 ID Card Detection',
      description:
        'Contributed to a real-time detection pipeline: data prep, Label Studio annotation, inference runs, and training workflow exposure.',
      tags: ['Python', 'YOLOv8', 'Label Studio', 'Ultralytics'],
      category: 'ai qa',
      visual: 'yolo',
      fullDescription: `
        <p><strong>Problem:</strong> Detect ID cards in real time with a custom dataset instead of relying on a generic detector.</p>
        <p><strong>My work:</strong> Assisted with dataset preparation, annotation in Label Studio, inference scripts, Python workflow practice, and YOLOv8 training using Ultralytics.</p>
        <p><strong>What I learned:</strong> Good AI results depend on the unglamorous parts too: data quality, labels, repeatable runs, and careful validation.</p>
      `,
    },
    {
      id: 'mine',
      type: 'Case 03 / Team Build',
      title: 'Mine Game Clone',
      description:
        'Supported frontend layout, integration testing, deployment preparation, and basic behavior checks for a full-stack team project.',
      tags: ['TailwindCSS', 'GraphQL', 'Razorpay', 'JWT'],
      category: 'web',
      visual: 'mine',
      fullDescription: `
        <p><strong>Problem:</strong> Recreate a betting game flow with frontend screens, integrations, auth behavior, and deployment readiness.</p>
        <p><strong>My work:</strong> Assisted in frontend layout using TailwindCSS, supported integration testing, contributed to deployment preparation, and learned from GraphQL, Razorpay API, and JWT-based authentication implementation.</p>
        <p><strong>Team value:</strong> I focused on layout support, testing, and making sure core behavior was ready for Vercel deployment checks.</p>
      `,
    },
  ]

  const filters = ['all', 'ai', 'web', 'qa']
  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.category.includes(activeFilter)
  )

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Case Files</p>
          <h2 id="work-title">Projects presented as work, not decoration.</h2>
        </div>
        <div className="filter-bar" role="list" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'is-active' : ''}`}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => onProjectClick(project)}
          >
            <div className={`project-visual ${project.visual}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="project-body">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button className="text-link" type="button">
                Open case file
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
