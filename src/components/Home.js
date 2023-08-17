const Home = () => {
  const content = {
    title: 'The Global Pneumococcal Sequencing Project',
    subtitle: 'A worldwide genomic survey of the impact of vaccination on the pathogen population',
    missionTitle: 'Our Mission',
    missionContent: 'We establish a worldwide genomic surveillance network of Streptococcus pneumoniae to provide evidence for pneumococcal disease control by building a decentralised system for local data generation and analysis that will be sustainable into the future.',
    introVideo: {
      title: 'How can whole-genome sequencing be used to make vaccines more effective?',
      id: 'trMW18aKXjo'
    },
  }

  const TitleText = ({text}) => <h1 className="text-4xl font-bold">{text}</h1>
  const SubtitleText = ({text}) => <h2 className="text-3xl font-bold">{text}</h2>
  const ContentText = ({text}) => <h3 className="text-2xl">{text}</h3>

  const YoutubeEmbed = ({id, title}) => <iframe className="flex-1 w-full aspect-video" src={`https://www.youtube.com/embed/${id}?rel=0&amp;cc_load_policy=1`} title={title} allowFullScreen></iframe>

  return (
    <div className="hero h-full bg-base-200 flex flex-col justify-center space-y-24 py-24">
      <div className="hero-content text-center">
        <div className="max-w-screen-xl space-y-5">
          <TitleText text={content.title}/>
          <ContentText text={content.subtitle} />
        </div>
      </div>
      <div className="hero-content flex-col md:flex-row text-center">
        <div className="max-w-screen-xl flex-1 space-y-5 text-left">
          <SubtitleText text={content.missionTitle} />
          <ContentText text={content.missionContent} />
        </div>  
        <YoutubeEmbed id={content.introVideo.id} title={content.introVideo.title}/>
      </div>
    </div>
  )
}

export default Home