import './Button.css'

export default props => {
  return (
    <button
      type={'button'}
      onClick={() => window.open(props.link)}>
      {props.text}
    </button>
  )
}