// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetAppList} = props
  const {name, imageUrl, description} = planetAppList

  return (
    <div className="planet-container">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
