import { useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { TitleText, Section } from "./Common"

import content from '../content/lineagesContent'

const assets = import.meta.glob("../assets/gpsc_clusters/*.png", { query: {as: 'meta:src;height;width' }, eager: true }, );

const GPSCGridTooltipContent = ({ gpsc, sampleCount, url }) => (
  <div className='text-center space-y-4'>
    <div className='font-bold'>GPSC {gpsc}</div>
    <div className='flex flex-col'>
      <div>GPS Sample Count: {sampleCount}</div>
      <a href={url} target='_blank' className='link' rel='noreferrer'>Explore in Microreact</a>
      <a href='https://jameshadfield.github.io/phandango/#/gps' target='_blank' className='link' rel='noreferrer'>View in Phandango</a>
    </div>
  </div>
)

const GPSCGrid = ({clusters}) => {
  const serotypeSelectPrompt = 'prompt'
  const [selectedRadio, setSelectedRadio] = useState('GPSC')
  const [selectedSerotype, setSelectedSerotype] = useState(serotypeSelectPrompt)
  const [searchValue, setSearchValue] = useState('')

  function serotypeSort(a, b) {
    a = a.toString()
    b = b.toString()
    let numA = parseInt(a, 10)
    let numB = parseInt(b, 10)
    let charA = a.replace(numA, "")
    let charB = b.replace(numB, "")

    if (numA < numB) return -1
    if (numA > numB) return 1
    if (charA < charB) return -1
    if (charA > charB) return 1
    return 0
  }

  const serotypes = new Set()
  clusters.map(({serotype}) => serotypes.add(...serotype))
  const sortedSerotypes = [...serotypes].sort(serotypeSort)

  function handleSelectedRadioChange(e) {
    setSelectedRadio(e.target.value)
    setSelectedSerotype(serotypeSelectPrompt)
    setSearchValue('')
  }

  return (    
    <div className='card bg-base-300 w-full'>
      <div className='m-4 p-4 flex items-center gap-4 max-w-max rounded-lg bg-base-100 shadow-md'>
        <span className='font-bold'>Search</span>
        <div className="join">
          {['GPSC', 'Serotype', 'ST'].map((value) => (
            <input className="join-item btn btn-sm" type="radio" name="searchBy" value={value} aria-label={value} checked={selectedRadio === value} onChange={e => handleSelectedRadioChange(e)} key={value} />
          ))}
          {
            selectedRadio === 'Serotype'
            ?
              <select className="select select-bordered select-sm join-item" value={selectedSerotype} onChange={e => setSelectedSerotype(e.target.value)}>
                <option value={serotypeSelectPrompt}>Select a serotype...</option>
                {sortedSerotypes.map((serotype) => (
                    <option key={serotype} value={serotype}>{serotype}</option>
                ))}
              </select>
            :
              <input className="input input-bordered input-sm join-item" placeholder="Search... (exact match)" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
          }
        </div>
      </div>
      <div className='card-body p-1 w-full flex flex-wrap flex-row justify-center items-center'>
        {clusters
          .filter(({gpsc, st, serotype}) => {
            if (selectedRadio === 'GPSC') {
              return searchValue === '' || gpsc === searchValue
            } else if (selectedRadio === 'ST') {
              return searchValue === '' || st.includes(parseInt(searchValue, 10))
            } else if (selectedRadio === 'Serotype') {
              return selectedSerotype === serotypeSelectPrompt || serotype.includes(selectedSerotype)
            } else {
              return true
            }
          })
          .map(({ gpsc, sampleCount, url }) => {
            const asset = assets[`../assets/gpsc_clusters/gpsc_${gpsc}.png`]
            const assetHalfWidth = asset.width / 2
            const assetHalfHeight = asset.height / 2
            return (
              <img 
                src={asset.src} 
                width={assetHalfWidth} 
                height={assetHalfHeight} 
                alt={`GPSC ${gpsc}`} 
                key={gpsc} 
                className='object-contain h-full skeleton'
                onLoad={(event) => event.target.classList.remove("skeleton")}
                data-tooltip-id="react-tooltip"
                data-tooltip-html={renderToStaticMarkup(<GPSCGridTooltipContent gpsc={gpsc} sampleCount={sampleCount} url={url}/>)}
                data-tooltip-place='top'
              />
            )
          }
        )}
      </div>
    </div>
  )
}

const Lineages = () => (
  <div className="hero flex flex-col justify-center space-y-10 py-20">
    <div className="hero-content w-full flex-col text-center">
      <TitleText text={content.title}/>
    </div>
    <div className='mb-0'>
      {content.sections.map( (props, index) => 
        <Section {...props} key={index} />
      )}
    </div>
    <div className="hero-content mt-0 w-full">
      <GPSCGrid clusters={content.gpscGrid} />
    </div>
  </div>
)

export default Lineages
