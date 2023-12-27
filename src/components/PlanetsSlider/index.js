// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="heading">Planets</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetAppList={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
