export default function Contact({ showToast }) {
  const resumePdf = '/assets/docs/Anil_Jangid_Resume.pdf'

  const contacts = [
    {
      label: 'Email me',
      value: 'aniljangid1311@gmail.com',
      href: 'mailto:aniljangid1311@gmail.com',
    },
    {
      label: 'LinkedIn profile',
      value: 'in.linkedin.com/in/anil-jangid-a03992293',
      href: 'https://in.linkedin.com/in/anil-jangid-a03992293',
    },
    {
      label: 'View resume',
      value: 'Anil_Jangid_Resume.pdf',
      href: resumePdf,
    },
  ]

  const handleDownload = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Anil_Jangid_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="section-kicker">Contact</p>
        <h2 id="contact-title">Direct paths.</h2>
        <p>GitHub, LinkedIn, email, and resume PDF in one clean place.</p>
      </div>
      <div className="link-directory" aria-label="Contact paths">
        {contacts.map((contact, idx) => (
          <a key={idx} className="link-row" href={contact.href} target="_blank" rel="noopener noreferrer">
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
          </a>
        ))}
        <button className="link-row" type="button" onClick={handleDownload}>
          <span>Download resume</span>
          <strong>Anil_Jangid_Resume.pdf</strong>
        </button>
        <a
          className="link-row"
          href="https://github.com/Anilj21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub profile</span>
          <strong>github.com/Anilj21</strong>
        </a>
      </div>
    </section>
  )
}
