import { useState } from 'react'

export default function Internship() {
  const [activeEnv, setActiveEnv] = useState('Adobe Sign')

  const environments = [
    'Adobe Sign',
    'Cal.com',
    'Rover',
    'MS Teams',
    'Workable',
    'Trello',
    'Shopify',
    'Buffer',
    'Box',
    'Google Calendar',
    'QuickBooks',
    'SAP',
  ]

  const envDetails = {
    'Adobe Sign':
      'Validated document upload, signature request workflows, signing order, status tracking, notifications, expiry, and multi-party edge cases.',
    'Cal.com':
      'Tested booking flows, availability setup, meeting types, time zones, recurring scheduling, notifications, and overlapping slots.',
    Rover: 'Covered service listings, provider-client booking flows, messaging behavior, and payment-related scenarios.',
    'MS Teams':
      'Tested channel creation, messaging, file sharing, meeting scheduling, notifications, and permission-based access across roles.',
    Workable:
      'Covered candidate pipelines, stage transitions, job posting behavior, filters, candidate profiles, messaging, and recruitment-stage data consistency.',
    Trello:
      'Validated board creation, card movement, list transitions, labels, checklists, members, due dates, and activity logs.',
    Shopify:
      'Tested product management, inventory, orders, customers, checkout flows, discount logic, and interconnected business cases.',
    Buffer:
      'Covered post scheduling, queue behavior, platform connection logic, publishing states, and UI consistency.',
    Box: 'Tested file and folder management, sharing permissions, version control, collaboration flows, and regression sign-off.',
    'Google Calendar':
      'Validated event creation, recurring event logic, attendee invites, reminders, time zones, and date-based edge cases.',
    QuickBooks:
      'Covered invoices, expenses, payments, tax calculations, financial views, and data consistency.',
    SAP: 'Tested procurement, inventory, order management, analytics views, integrated module data flow, and complex enterprise edge cases.',
  }

  return (
    <section className="section internship-section" id="internship" aria-labelledby="internship-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">QA Field Log</p>
          <h2 id="internship-title">Scaler AI Labs: testing web replicas for AI agents.</h2>
        </div>
      </div>

      <div className="internship-layout">
        <article className="internship-card">
          <p className="project-type">Dec 2025 - May 2026 / InterviewBit Software Services</p>
          <h3>What I actually did</h3>
          <p>
            I tested high-fidelity replica applications used for reinforcement learning. The work was practical: understand
            the product, try realistic user paths, catch defects, document them in Excel, verify fixes, and sign off when ready.
          </p>
          <div className="internship-stats">
            <div>
              <strong>12</strong>
              <span>assigned environments completed</span>
            </div>
            <div>
              <strong>1-2</strong>
              <span>environments per week</span>
            </div>
            <div>
              <strong>Excel</strong>
              <span>bug tracking and closure records</span>
            </div>
          </div>
        </article>

        <div className="environment-shell">
          <div className="environment-grid" aria-label="RL environments tested">
            {environments.map((env) => (
              <button
                key={env}
                type="button"
                className={`${activeEnv === env ? 'is-active' : ''}`}
                onClick={() => setActiveEnv(env)}
                data-env={env}
              >
                {env}
              </button>
            ))}
          </div>
          <article className="environment-panel" data-env-panel>
            <p className="project-type">Selected Environment</p>
            <h3>{activeEnv}</h3>
            <p>{envDetails[activeEnv]}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
