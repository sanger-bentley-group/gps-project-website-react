import { renderToStaticMarkup } from 'react-dom/server'
import { ComposableMap, Geographies, Geography, Sphere, Graticule, Marker } from "react-simple-maps"
import { Tooltip } from "react-tooltip"

import { TitleText } from "./Common"

import content from '../content/partnersContent'
import topoJSON from '../content/worldTopoJSON.json'

const TooltipContent = ({ info }) => (
  <div className='text-center space-y-4'>
    <div className='italic'>{info.city}, {info.country}</div>
    {
      info.affiliations.map((affiliation, index) => (
        <div key={index}>
          <div className='font-bold'>{affiliation.name}</div>
          <div>{affiliation.partners.join(', ')}</div>
        </div>
      ))
    }
  </div>
)

const Markers = () => (
  content.partnerByCity.map((info, index) => (
    <Marker coordinates={[info.longitude, info.latitude]} key={index} >
      <circle 
        className='opacity-80 hover:opacity-100'
        r={4} 
        fill="hsl(var(--p))" 
        stroke="#FFFFFF"
        strokeWidth={1}
        data-tooltip-id="partner-info"
        data-tooltip-html={renderToStaticMarkup(<TooltipContent info={info} />)}
        data-tooltip-place="top"
      />
    </Marker>
  ))
)

const Map = () => (
  <ComposableMap width={1000} height={500} >
    <Sphere stroke="#AAAAAA" strokeWidth={0.5} />
    <Graticule stroke="#AAAAAA" strokeWidth={0.5} />
    <Geographies geography={topoJSON}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography key={geo.rsmKey} geography={geo} fill="#D5D5D5" stroke="#505050" strokeWidth={0.5} />
        ))
      }
    </Geographies>
    <Markers />
  </ComposableMap>
)

const Partners = () => (
  <div className="hero flex flex-col justify-center space-y-10 py-20">
    <div className="hero-content w-full flex-col text-center">
      <TitleText text={content.title}/>
    </div>
    <div className="hero-content w-full">
      <Map />
      <Tooltip id="partner-info" />
    </div>
  </div>
)

export default Partners
