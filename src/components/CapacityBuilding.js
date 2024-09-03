import LocalSequencing from "./LocalSequencing"
import LocalDataAnalysis from "./LocalDataAnalysis"
import OneToOneTraining from "./OneToOneTraining"

import { TitleText, Section } from "./Common"

import content from '../content/capacityBuildingContent'

const CapacityBuilding = () => (
  <div className="h-full">
    <div className="hero flex flex-col justify-center space-y-10 py-20">
      <div className="hero-content w-full flex-col text-center">
        <TitleText text={content.title}/>
      </div>
      {content.sections.map( (props, index) => 
        <Section {...props} key={index} />
      )}
    </div>
    <section id="local-sequencing"><LocalSequencing /></section>
    <section id="local-data-analysis"><LocalDataAnalysis /></section>
    <section id="one-to-one-training"><OneToOneTraining /></section>
  </div>
)

export default CapacityBuilding
