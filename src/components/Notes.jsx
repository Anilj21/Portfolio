export default function Notes() {
  const notes = [
    {
      type: 'Working Style',
      title: 'Start by reproducing. Then explain clearly.',
      body:
        'QA taught me that a useful defect ticket is a tiny product document: steps, expected behavior, actual behavior, severity, and enough context for another developer to fix it without guessing.',
      wide: true,
    },
    {
      type: 'Languages',
      title: 'English, Hindi, Marathi',
      body: 'Comfortable communicating across team and academic settings.',
    },
    {
      type: 'Education',
      title: 'JNEC Aurangabad',
      body: 'B.Tech CSE, CGPA 6.65/10, expected June 2026.',
    },
    {
      type: 'Next Target',
      title: 'Developer role where testing sense is a strength.',
      body: 'Full-stack, AI product, QA automation, or product engineering teams.',
      accent: true,
    },
  ]

  return (
    <section className="section notes-section" id="notes" aria-labelledby="notes-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Field Notes</p>
          <h2 id="notes-title">Small details that say more than a big headline.</h2>
        </div>
      </div>

      <div className="notes-grid">
        {notes.map((note) => (
          <article
            key={note.type}
            className={`note-card ${note.wide ? 'wide' : ''} ${note.accent ? 'accent-card' : ''}`}
          >
            <p className="project-type">{note.type}</p>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
