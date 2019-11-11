export default props => {
  return (
    <button
      onClick={() => window.open(props.link)}>
      {props.text}
    </button>
  )
}