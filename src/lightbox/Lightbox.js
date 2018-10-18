import { Component } from 'inferno'
import './Lightbox.css'

export default class Lightbox extends Component {
  render() {
    if(!this.props.image) return null

    return (
      <div className="lightbox">
        <img src={this.props.image} alt="Project" />
      </div>
    )
  }
}