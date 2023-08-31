import { TitleText, Section } from "./Common"

import content from '../content/teamContent'

const Team = () => (
  <div className="hero h-full bg-base-200 flex flex-col justify-center space-y-10 py-20">
    <div className="hero-content w-full flex-col text-center">
      <TitleText text={content.title}/>
    </div>
    {content.sections.map( (props, index) => 
      <Section {...props} key={index} />
    )}
  </div>
)

export default Team
