import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom"


const TitleText = ({text}) => (
  <h1 className="text-4xl font-bold"><ReactMarkdown children={text} /></h1>
)

const SubtitleText = ({text}) => (
  <h2 className="text-2xl font-bold"><ReactMarkdown children={text} /></h2>
)

const ContentText = ({text}) => (
  <div className="w-full text-lg">
    <ReactMarkdown 
      components={{
        a: ({ href, children })  => <Link to={href} className='link' target='_blank'>{children}</Link>,
        ol: ({ start, children }) => <ol start={start} className='list-decimal list-outside ms-8'>{children}</ol>,
        ul: ({ children }) => <ul className='list-disc list-outside ms-8'>{children}</ul>,
        h3: ({children}) => <h3 className='text-xl font-bold'>{children}</h3>,
        img: ({src, alt, title}) => <img className='w-full' src={src} alt={alt} title={title}/>
      }} 
      children={text} 
    />
  </div>
)

const ContentCode = ({code}) => (
  <div className="mockup-code">
    {code.map((line, index) => 
      <pre data-prefix="$" key={index}><code>{line}</code></pre>
    )}
  </div>
)

const SectionContent = ({text, code}) => (
  text
  ? <ContentText text={text} />
  : code 
    ? <ContentCode code={code} />
    : ''
)

const Section = ({subtitle, content}) => (
  <div className="hero-content flex-col w-full items-start">
    <SubtitleText text={subtitle} />
    {
      content.map( (props, index) => 
        <SectionContent {...props} key={index} />)
    }
  </div>
)

export {TitleText, SubtitleText, ContentText, ContentCode, Section}