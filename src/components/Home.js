import { Link } from "react-router-dom"

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
    leaders: [
      {
        name: 'Stephen Bentley',
        url: 'https://www.sanger.ac.uk/people/directory/bentley-stephen-d',
        institute: 'Wellcome Sanger Institute',
        instituteUrl: 'https://www.sanger.ac.uk/'
      },
      {
        name: 'Lesley McGee',
        url: '',
        institute: 'Centers for Disease Control and Prevention',
        instituteUrl: 'https://www.cdc.gov/'
      }
    ],
    projectManager: {
      name: 'Stephanie Lo',
      url: 'https://www.sanger.ac.uk/person/lo-stephanie/',
      institute: 'Wellcome Sanger Institute',
      instituteUrl: 'https://www.sanger.ac.uk/'
    },
    funder: {
      logo: 'gates_foundation_logo.png',
      alt: 'Bill & Melinda Gates Foundation',
      url: 'https://www.gatesfoundation.org/'
    },
    cofunder: {
      logo: 'wellcome_trust_logo.png',
      alt: 'Wellcome Trust Logo',
      url: 'https://wellcome.org/'
    },
    founders: [
      {
        logo: 'cdc_logo.png',
        alt: 'CDC Logo',
        url: 'https://www.cdc.gov/'
      },
      {
        logo: 'emory_logo.png',
        alt: 'Emory University Logo',
        url: 'https://www.globalhealth.emory.edu/'
      },
      {
        logo: 'mlw_logo.png',
        alt: 'Malawi Liverpool Wellcome Programme Logo',
        url: 'https://www.mlw.mw/'
      },
      {
        logo: 'mrc_gambia_logo.png',
        alt: 'MRC Unit The Gambia at LSHTM Logo',
        url: 'https://www.mrc.gm'
      },
      {
        logo: 'nicd_logo.png',
        alt: 'The National Institute for Communicable Diseases Logo',
        url: 'https://www.nicd.ac.za/'
      },
      {
        logo: 'sanger_logo.png',
        alt: 'Wellcome Sanger Institute Logo',
        url: 'https://www.sanger.ac.uk/'
      }
    ]
  }

  const TitleText = ({text}) => (
    <h1 className="text-4xl font-bold">{text}</h1>
  )

  const SubtitleText = ({text}) => (
    <h2 className="text-2xl font-bold">{text}</h2>
  )

  const ContentText = ({text}) => (
    <h4 className="text-xl">{text}</h4>
  )

  const NameAndInstitute = ({name, url, institute, instituteUrl}) => (
    <div className="flex">
      {
        url !== '' 
        ? <div className="link link-hover"><Link to={url} target="_blank"><ContentText text={name} /></Link></div>
        : <ContentText text={name} />
      }
      <div className="divider divider-horizontal"></div>
      {
        instituteUrl !== '' 
        ? <div className="link link-hover"><Link to={instituteUrl} target="_blank"><ContentText text={institute} /></Link></div>
        : <ContentText text={institute} />
      }
    </div> 
  )

  const Logo = ({logo, alt, url}) => (
    <Link to={url} target="_blank">
      <img className='h-20 min-h-[5rem] my-4' src={logo} alt={alt}></img>
    </Link>
  )

  const YoutubeEmbed = ({id, title}) => (
    <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${id}?rel=0&amp;cc_load_policy=1`} title={title} allowFullScreen></iframe>
  )

  return (
    <div className="hero h-full bg-base-200 flex flex-col justify-center space-y-20 py-20">
      <div className="hero-content w-full text-center">
        <div className="space-y-5">
          <TitleText text={content.title}/>
          <SubtitleText text={content.subtitle} />
        </div>
      </div>
      <div className="hero-content w-full flex-col xl:flex-row ">
        <div className="flex-1 space-y-5 flex flex-col items-center xl:items-start">
          <SubtitleText text={content.missionTitle} />
          <ContentText text={content.missionContent} />
        </div>  
        <div className="flex-1 w-full">
          <YoutubeEmbed id={content.introVideo.id} title={content.introVideo.title}/>
        </div>
      </div>
      <div className="hero-content w-full flex-col space-y-10">
        <div className="w-full flex flex-col space-x-0 space-y-20 xl:flex-row xl:justify-between xl:space-x-20 xl:space-y-0">
          <div className="w-full space-y-20">
            <div className="flex flex-col items-center space-y-5 xl:items-start">
              <SubtitleText text='Project Leaders' />
              <div className="flex flex-col items-center space-y-5 xl:items-start">
                {content.leaders.map( (props, index)  => <NameAndInstitute {...props} key={index} />)}
              </div>
            </div>  
            <div className="space-y-5 flex flex-col items-center xl:items-start">
              <SubtitleText text='Project Manager' />
                <div className="flex flex-col space-y-5">
              <NameAndInstitute {...content.projectManager} />
              </div>
            </div>
          </div>
          <div className="w-full space-y-20">
            <div className="space-y-5 flex flex-col items-center xl:items-start">
              <SubtitleText text='Funded by' />
              <Logo {...content.funder}/>
            </div> 
            <div className="space-y-5 flex flex-col items-center xl:items-start">
              <SubtitleText text='Co-funded by' />
              <Logo {...content.cofunder}/>
              </div>  
          </div>
        </div>
        <div className="w-full space-y-5 flex flex-col items-center xl:items-start">
          <SubtitleText text='Founding Partners' />
          <div className="w-full flex flex-wrap justify-between space-x-4">
            {content.founders.map( (props, index ) => <Logo {...props} key={index}/>)}
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Home