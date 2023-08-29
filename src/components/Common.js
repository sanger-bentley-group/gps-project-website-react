import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom"


const TitleText = ({text}) => (
  <h1 className="text-4xl font-bold"><ReactMarkdown children={text} /></h1>
)

const SubtitleText = ({text, className}) => (
  <h2 className={`text-2xl font-bold ${className ? className : ''}`}><ReactMarkdown children={text} /></h2>
)

const ContentMD = ({md}) => (
  <div className="text-lg">
    <ReactMarkdown 
      components={{
        a: ({ href, children })  => <Link to={href} className='link' target='_blank'>{children}</Link>,
        ol: ({ start, children }) => <ol start={start} className='list-decimal list-outside ms-8'>{children}</ol>,
        ul: ({ children }) => <ul className='list-disc list-outside ms-8'>{children}</ul>,
        h3: ({children}) => <h3 className='text-xl font-bold'>{children}</h3>,
        img: ({src, alt, title}) => <img className='w-full' src={src} alt={alt} title={title}/>
      }} 
      children={md} 
    />
  </div>
)

const ContentCode = ({code}) => (
  <div className="mockup-code w-full">
    {code.map((line, index) => 
      <pre data-prefix="$" key={index}><code>{line}</code></pre>
    )}
  </div>
)

const ContentNameCard = ({cards}) => (
  <div className='hero-content w-full flex flex-wrap justify-around gap-y-20 xl:justify-between'>
    {cards.map((card, index) => (
      <div className="card card-side w-[32rem] bg-base-100 shadow-md" key={index}>
        <div className="avatar">
          <div className="w-36 rounded">
            <img src={card.photo} alt={card.name} />
          </div>
        </div>
        <div className="card-body">
          <p className="card-title text-lg">{card.name}</p>
          <p>{card.position}</p>
        </div>
      </div>
    ))}
  </div>
)

const SectionContent = ({type, content}) => {
  switch (type) {
    case 'md':
      return <ContentMD md={content} />
    case 'code':
      return <ContentCode code={content} />
    case 'nameCard':
      return <ContentNameCard cards={content} />
    default:
      return
  }
}

const Section = ({subtitle, content}) => (
  <div className="hero-content flex-col w-full items-start">
    <SubtitleText text={subtitle} className="self-center xl:self-start"/>
    {
      content.map( (props, index) =>
        <SectionContent {...props} key={index} />)
    }
  </div>
)

export {TitleText, SubtitleText, ContentMD, ContentCode, Section}