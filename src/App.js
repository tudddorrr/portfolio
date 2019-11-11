import { Component, linkEvent } from 'inferno'
import './registerServiceWorker'
import './App.css'
import projects from './assets/projects'
import Lightbox from './lightbox/Lightbox'
import builtWithIcon from './assets/icons/builtwith.svg'
import emailIcon from './assets/icons/email.svg'
import Button from './Button'

export default class App extends Component {
  state = {
    projectIndex: 0,
    image: null,
    lightsOff: false
  }

  renderProjectNames() {
    return (
      <div className="projectList">
        {projects.map((p, i) => {
          const className = "projectListTitle" + (i === this.state.projectIndex ? " projectListTitleActive" : "")
          return (      
            <p
              className={className}
              onClick={linkEvent({ context: this, index: i }, this.clickProject)}
            >
              {p.title}
            </p>
          )
        })}
      </div>
    )
  }
  
  clickProject(e) {
    e.context.setState({ projectIndex: e.index, image: null, lightsOff: false })
  }

  clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }

  setImage(e) {
    e.context.setState({ image: e.image })
  }

  closeLightbox(context) {
    context.setState({ image: null })
  }

  onPlayVideo(context, e) {
    context.setState({ lightsOff: true })
  }

  render() {
    let p = projects[this.state.projectIndex]
    let className = "app"
    if (p.title.startsWith("LIFX") && !this.state.lightsOff) className += " party"

    const numProjectMedia = (p.images ? p.images.length : 0) + (p.videos ? p.videos.length : 0);

    return (
      <div className={className} style={{ "background-color": p.bg, color: p.colour }}>
        {this.renderProjectNames()}

        <div className="content">
          <div className="projectName">
            <h1>{p.title} {p.title === "Tudor" ? " Sandulescu" : ""}</h1>
            <h2>{p.date} {p.wip ? "[WIP]" : ""}</h2>
          </div>

          {p.text && p.text.map(s => {
            return <p className="projectText">{s}</p>
          })}

          {p.smallProjects && p.smallProjects.map(sp => {
            return (
              <div className={"smallProject"}>
                <h2>{sp.title}</h2>
                <p className="projectText">{sp.text}</p>
                <Button link={"http://" + sp.url} text={sp.url} />
              </div>
            )
          })}

          {p.builtWith &&
            <div className="builtWith">
              <div className="iconTextWrapper">
                <img className="icon" src={builtWithIcon} alt="Built with..." />
                <p className="builtWithText">{p.builtWith.join(", ")}</p>
              </div>
            </div>
          }
        
          {p.urls &&
            <div className="urlsWrapper">
              {p.urls.map(url => <Button link={url.link} text={url.text} />)}
            </div>
          }

          {p.title === "Tudor" &&
            <div className="iconTextWrapper">
              <img className="icon" src={emailIcon} alt="Email me" />
              <p className="emailAddress">firstnamelastname@outlook.com</p>
            </div>
          }

          <div
            className="projectMedia"
            style={{ "grid-template-columns": "repeat(" + (p.columns ? p.columns : numProjectMedia) + ", 1fr)" }}
          >
            {p.images && p.images.map(image => (
              <img
                src={image}
                alt={image}
                onClick={linkEvent({context: this, image}, this.setImage)}
              />
            ))}
            {p.videos && p.videos.map(video => (
              <video controls onPlay={linkEvent(this, this.onPlayVideo)}>
                <source src={video} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>

        <Lightbox
          image={this.state.image}
          close={linkEvent(this, this.closeLightbox)}
        />
      </div>
    )
  }
}
