import { TitleText, Section } from "./Common"

import content from '../content/publicationsContent'

const Publications = () => (
  <div className="hero flex flex-col justify-center space-y-10 py-20 h-full">
    <div className="hero-content w-full flex-col text-center">
      <TitleText text={content.title}/>
    </div>
    {content.sections.map( (props, index) => 
      <Section {...props} key={index} />
    )}
  </div>
)

export default Publications
