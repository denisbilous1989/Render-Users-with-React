function Link({ className, spanText, text }) {
  return (
    <a href="#" className={className}>
      <span>{spanText} </span> {text}
    </a>
  )
}

export default Link;