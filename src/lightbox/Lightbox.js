
import './Lightbox.css'

export default props => {
  if(!props.image) return null

  return (
    <div
      className="lightbox"
      onClick={props.close}
    >
      <img src={props.image} alt="Project" />
    </div>
  )
}