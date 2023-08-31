import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps"
import { Tooltip } from "react-tooltip"
import { TitleText } from "./Common"

import content from '../content/partnersContent'
import topoJSON from '../content/worldTopoJSON.json'

const Partners = () => {

  const Map = () => (
    <ComposableMap width={1000} height={500} >
      <Sphere stroke="#AAAAAA" strokeWidth={0.5} />
      <Graticule stroke="#AAAAAA" strokeWidth={0.5} />
      <Geographies geography={topoJSON}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )

  return (
    <div className="hero h-full bg-base-200 flex flex-col justify-center space-y-10 py-20">
      <div className="hero-content w-full flex-col text-center">
        <TitleText text={content.title}/>
      </div>
      <div className="hero-content w-full">
        <Map />
        <Tooltip id="partner-info" />
      </div>
    </div>
  )
}

export default Partners