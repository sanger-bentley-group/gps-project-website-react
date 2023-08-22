import { TitleText, SubtitleText, ContentText, ContentCode } from "./Common"

import content from '../content/commandLineContent'


const CommandLine = () => {

  const Section = ({subtitle, content}) => (
    <div className="hero-content flex-col w-full items-start">
      <SubtitleText text={subtitle} />
      {
        content.map( (props, index) => 
          <SectionContent {...props} key={index} />)
      }
    </div>
  )

  const SectionContent = ({text, code}) => (
    text
    ? <ContentText text={text} />
    : <ContentCode code={code} />
  )

  return (
    <div className="hero h-full bg-base-200 flex flex-col justify-center space-y-10 py-20">
      <div className="hero-content w-full flex-col text-center">
        <TitleText text={content.title}/>
      </div>
      {content.sections.map( (props, index) => 
        <Section {...props} key={index} />
      )}
    </div>
  )
}

export default CommandLine