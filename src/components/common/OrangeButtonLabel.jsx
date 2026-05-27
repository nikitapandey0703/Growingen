export default function OrangeButtonLabel({ children }) {
  return (
    <span className="orange-button-label">
      <span className="orange-button-label__text orange-button-label__text--base">
        {children}
      </span>
      <span className="orange-button-label__text orange-button-label__text--hover" aria-hidden="true">
        {children}
      </span>
    </span>
  )
}
