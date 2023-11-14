import { renderToStaticMarkup } from 'react-dom/server'
import { ComposableMap, Geographies, Geography, Sphere, Graticule, Marker } from "react-simple-maps"

import { TitleText, Section } from "./Common"

import content from '../content/countriesContent'
import topoJSON from '../content/worldTopoJSON.json'

const TooltipContent = ({ info }) => (
  <div className='text-center space-y-4'>
    <div className='font-bold'>{info.country}</div>
    <div>Sample Count: {info.sampleCount}</div>
    {
      info.microreactURL
      ?
        <a href={info.microreactURL} target='_blank' className='link' rel='noreferrer'>Explore in Microreact</a>
      :
      ''
    }
  </div>
)

const Markers = ({samplingByCountry}) => (
  samplingByCountry.map((info, index) => (
    <Marker coordinates={[info.longitude, info.latitude]} key={index} >
      <circle 
        className='opacity-80 hover:opacity-100'
        r={4} 
        fill={info.microreactURL ? "hsl(var(--a))" : "hsl(var(--p))"}
        stroke="#FFFFFF"
        strokeWidth={1}
        data-tooltip-id="react-tooltip"
        data-tooltip-html={renderToStaticMarkup(<TooltipContent info={info} />)}
        data-tooltip-place="top"
      />
    </Marker>
  ))
)

const Map = (props) => (
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
    <Markers {...props} />
  </ComposableMap>
)

const Countries = () => (
  <div className="hero flex flex-col justify-center space-y-10 py-20">
    <div className="hero-content w-full flex-col text-center">
      <TitleText text={content.title}/>
    </div>
    {content.sections.map( (props, index) => 
        <Section {...props} key={index} />
      )}
    <div className="hero-content mt-0 w-full">
      <Map samplingByCountry={content.samplingByCountry}/>
    </div>
  </div>
)

export default Countries
