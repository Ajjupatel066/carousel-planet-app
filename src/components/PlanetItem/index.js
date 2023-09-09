// Write your code here
import './index.css'

const PlanetItem = props => {
  const {slideDetails} = props
  const {name, imageUrl, description} = slideDetails

  return (
    <div className="img-container">
      <img src={imageUrl} className="planet-image" alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
