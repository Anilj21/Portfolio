export default function Toast({ message }) {
  return (
    <div className="toast is-visible" role="status" aria-live="polite">
      {message}
    </div>
  )
}
