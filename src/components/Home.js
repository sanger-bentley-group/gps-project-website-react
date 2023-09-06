import { Link } from "react-router-dom"

import { TitleText, SubtitleText, ContentMD } from "./Common"

import content from '../content/homeContent'

const NameAndInstitute = ({name, url, institute, instituteUrl}) => (
  <div className="flex">
    {
      url !== '' 
      ? <div className="link link-hover"><Link to={url} target="_blank"><ContentMD md={name} /></Link></div>
      : <ContentMD md={name} />
    }
    <div className="divider divider-horizontal"></div>
    {
      instituteUrl !== '' 
      ? <div className="link link-hover"><Link to={instituteUrl} target="_blank"><ContentMD md={institute} /></Link></div>
      : <ContentMD md={institute} />
    }
  </div> 
)

const Logo = ({logo, alt, url}) => (
  <Link to={url} target="_blank">
    <img className='h-20 min-h-[5rem] my-4 object-contain' src={logo} alt={alt}></img>
  </Link>
)

const YoutubeEmbed = ({id, title}) => (
  <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${id}?rel=0&amp;cc_load_policy=1`} title={title} allowFullScreen></iframe>
)

const HeroTwoColumns = ({colOne, colTwo}) => (
  <div className="hero-content w-full flex-col text-lg items-center xl:items-start xl:flex-row">
    <div className="hero-content w-full flex-col items-center xl:items-start">
      {colOne}
    </div>  
    <div className="hero-content w-full flex-col items-center xl:items-start">
      {colTwo}
    </div>
  </div>
)

const Home = () => (
  <div className="hero h-full bg-base-200 flex flex-col justify-center space-y-10 py-20">
    <div className="hero-content w-full flex-col text-center">
      <TitleText text={content.title}/>
      <SubtitleText text={content.subtitle} />
    </div>
    <HeroTwoColumns
      colOne={
        <>
          <SubtitleText text={content.missionTitle} />
          <ContentMD md={content.missionContent} />
        </>
      }
      colTwo={
        <YoutubeEmbed id={content.introVideo.id} title={content.introVideo.title}/>
      }
    />
    <HeroTwoColumns
      colOne={
        <>
          <SubtitleText text='Project Leaders' />
          <div className="flex flex-col items-center space-y-5 xl:items-start">
            {content.leaders.map( (props, index)  => <NameAndInstitute {...props} key={index} />)}
          </div>
        </>
      }
      colTwo={
        <>
          <SubtitleText text='Project Manager' />
          <div className="flex flex-col items-center space-y-5 xl:items-start">
            {content.pms.map( (props, index)  => <NameAndInstitute {...props} key={index} />)}
          </div>
        </>
      }
    />
    <HeroTwoColumns
      colOne={
        <>
          <SubtitleText text='Funded by' />
          <Logo {...content.funder}/>
        </>
      }
      colTwo={
        <>
            <SubtitleText text='Co-funded by' />
            <Logo {...content.cofunder}/>
        </>
      }
    />
    <div className="hero-content w-full flex-col items-center xl:items-start px-8">
      <SubtitleText text='Founding Partners' />
      <div className="w-full flex flex-wrap justify-around space-x-4 xl:justify-between">
        {content.founders.map( (props, index ) => <Logo {...props} key={index}/>)}
      </div>
    </div> 
  </div>
)

export default Home
