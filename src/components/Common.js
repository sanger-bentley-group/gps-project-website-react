import ReactMarkdown from 'react-markdown'

const TitleText = ({text}) => (
  <h1 className="text-4xl font-bold"><ReactMarkdown children={text} /></h1>
)

const SubtitleText = ({text}) => (
  <h2 className="text-2xl font-bold"><ReactMarkdown children={text} /></h2>
)

const ContentText = ({text}) => (
  <div className="text-lg">
    <ReactMarkdown 
      components={{
        a: ({ href, children })  => <a href={href} className='link'>{children}</a>,
        ol: ({ start, children }) => <ol start={start} className='list-decimal list-outside ms-8'>{children}</ol>,
        ul: ({ children }) => <ul className='list-disc list-outside ms-8'>{children}</ul>,
        h3: ({children}) => <h3 className='text-xl font-bold'>{children}</h3>
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

export {TitleText, SubtitleText, ContentText, ContentCode}