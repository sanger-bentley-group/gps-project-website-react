import { Link } from "react-router-dom"

import { TitleText, SubtitleText, ContentMD, ContentYoutubeEmbed } from "./Common"

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
      <SubtitleText text={content.subtitle.content} />
    </div>
    <HeroTwoColumns
      colOne={
        <>
          <SubtitleText text={content.mission.title} />
          <ContentMD md={content.mission.content} />
        </>
      }
      colTwo={
        <ContentYoutubeEmbed id={content.introVideo.id} title={content.introVideo.title}/>
      }
    />
    <HeroTwoColumns
      colOne={
        <>
          <SubtitleText text={content.leaders.subtitle.content} />
          <div className="flex flex-col items-center space-y-5 xl:items-start">
            {content.leaders.content.map( (props, index)  => <NameAndInstitute {...props} key={index} />)}
          </div>
        </>
      }
      colTwo={
        <>
          <SubtitleText text={content.pms.subtitle.content} />
          <div className="flex flex-col items-center space-y-5 xl:items-start">
            {content.pms.content.map( (props, index)  => <NameAndInstitute {...props} key={index} />)}
          </div>
        </>
      }
    />
    <HeroTwoColumns
      colOne={
        <>
          <SubtitleText text={content.funder.subtitle.content} />
          <Logo {...content.funder.content}/>
        </>
      }
      colTwo={
        <>
            <SubtitleText text={content.cofunder.subtitle.content} />
            <Logo {...content.cofunder.content}/>
        </>
      }
    />
    <div className="hero-content w-full flex-col items-center xl:items-start px-8">
      <SubtitleText text={content.founders.subtitle.content} />
      <div className="w-full flex flex-wrap justify-around space-x-4 xl:justify-between">
        {content.founders.content.map( (props, index ) => <Logo {...props} key={index}/>)}
      </div>
    </div> 
  </div>
)

export default Home
