import { Component, linkEvent } from 'inferno'
import './registerServiceWorker'
import './App.css'
import projects from './assets/projects'
import Lightbox from './lightbox/Lightbox'

export default class App extends Component {
  state = {
    projectIndex: 0,
    introAnim: false,
    image: null,
    lightsOff: false,
    frameMouseOver: false
  }

  componentWillMount() {
    // turning lights off
    window.addEventListener('blur', () => {
      if(this.state.frameMouseOver){
        this.setState({lightsOff: true})
      }
    })

    // preload images
    let images = []

    projects.forEach(p => images = images.concat(p.images))
    images.forEach(i => {
      let img = new Image()
      img.src = i
    })

    // intro animation should only run once
    setTimeout(() => {
      this.setState({introAnim: true})
    }, 500)
  }

  render() {
    let p = projects[this.state.projectIndex]
    let className = "app"
    if(p.title.startsWith("Tudor") && !this.state.introAnim) className+= " intro"
    if(p.title.startsWith("LIFX") && !this.state.lightsOff) className += " party"

    return (
      <div className={className} style={{"background-color": p.bg, color: p.colour}}>
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
                <p className="projectText"><a href={"http://" + sp.url} target="_blank" rel="noopener noreferrer">{sp.url}</a></p>
              </div>
            )
          })}

          <br/>

          {p.builtWith
            ? <p className="projectText">{p.builtWith.join(" / ")}</p>
            : null
          }

          {p.title === "Tudor"
            ? this.renderAboutNav()
            : null
          }

          {p.url
            ? <p className="projectText"><a href={"http://" + p.url} target="_blank" rel="noopener noreferrer">{p.url}</a></p>
            : null
          }

          <div className="projectImages" style={{"grid-template-columns": "repeat(" + (p.columns ? p.columns : p.images.length) + ", 1fr)"}}>
            {p.images.map(image => (
              <img
                src={image}
                alt={image}
                onClick={() => this.setState({image: image})}
              />
            ))}

            {p.title === "LIFX Visualiser"
              ? this.renderVideo()
              : null
            }
          </div>
        </div>
        
        <div onClick={() => this.setState({image: null})}>
          <Lightbox image={this.state.image} width={this.state.imagewidth} />
        </div>
      </div>
    )
  }

  renderProjectNames() {
    return (
      <div className="projects">
        {projects.map((p, i) => {
          let opacity = i===this.state.projectIndex ? 1 : 0.5

          return <h4 style={{opacity: opacity}} onMouseOver={linkEvent({context: this, index: i}, this.clickProject)}>{p.title}</h4>
        })}
      </div>
    )
  }

  renderAboutNav() {
    return (
      <ul className="aboutNav">
        <li><a href="https://github.com/sekaru">GitHub</a></li>
        <li><a href="https://twitter.com/sekaru_">Twitter</a></li>
        <li><a href="https://www.linkedin.com/in/tudor-sandulescu-257bb5130">LinkedIn</a></li>
        <li><a href="cv.pdf">CV</a></li>
        <li>firstnamelastname@outlook.com</li>
      </ul>
    )
  }

  renderVideo() {
    return (
      <iframe id="visualiser" title="Visualiser" src="https://www.youtube-nocookie.com/embed/xT7BFZc1tkY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    )
  }

  clickProject(e) {
    let oldIndex = e.context.state.projectIndex
    e.context.setState({projectIndex: e.index, image: null, lightsOff: oldIndex===e.index})

    if(oldIndex===e.index) return
    window.focus()

    // lifx project: turning the lights off
    if(projects[e.index].title.startsWith("LIFX")) {
      document.getElementById("visualiser").addEventListener('mouseover', () => {
        e.context.setState({frameMouseOver: true})
      })

      document.getElementById("visualiser").addEventListener('mouseout', () => {
        e.context.setState({frameMouseOver: false})
      })
    }
  }

  clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }
}
