export default function Profile({ onProfileClick }) {
  const profiles = [
    {
      id: '01',
      title: 'I learn systems by using them deeply.',
      description:
        'During the Scaler AI Labs internship, every RL environment started with understanding the original product flow before writing useful bugs.',
    },
    {
      id: '02',
      title: 'I can move between UI, backend, and AI tooling.',
      description:
        'SmartDocs uses React, Express.js, Ollama, Firebase auth, and Tailwind UI. YOLOv8 ID detection added dataset prep, annotation, and inference practice.',
    },
    {
      id: '03',
      title: 'I write for the next person in the workflow.',
      description:
        'Bug tickets, reproduction steps, expected vs actual behavior, and regression checks trained me to communicate clearly with developers.',
    },
  ]

  return (
    <section className="section profile-section" aria-label="Profile summary">
      <div className="profile-copy">
        <p className="section-kicker">Why Me</p>
        <h2>My advantage is the mix: builder instincts plus tester discipline.</h2>
      </div>
      <div className="profile-grid">
        {profiles.map((item) => (
          <button
            key={item.id}
            className="profile-card"
            type="button"
            onClick={onProfileClick}
          >
            <span>{item.id}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </button>
        ))}
      </div>
    </section>
  )
}
