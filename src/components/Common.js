import ReactMarkdown from 'react-markdown'

const TitleText = ({text}) => (
  <h1 className="text-4xl font-bold"><ReactMarkdown children={text} /></h1>
)

const SubtitleText = ({text}) => (
  <h2 className="text-2xl font-bold"><ReactMarkdown children={text} /></h2>
)

const ContentText = ({text}) => (
  <p className="text-lg">
    <ReactMarkdown 
      components={{
        a: ({ href, children })  => <a href={href} className='link'>{children}</a>,
        ol: ({ start, children }) => <ol start={start} className='list-decimal list-inside'>{children}</ol>,
        h3: ({children}) => <h3 className='text-xl font-bold'>{children}</h3>
      }} 
      children={text} 
    />
  </p>
)

const ContentCode = ({code}) => (
  <div className="mockup-code">
    {code.map((line) => 
      <pre data-prefix="$"><code>{line}</code></pre>
    )}
  </div>
)

export {TitleText, SubtitleText, ContentText, ContentCode}