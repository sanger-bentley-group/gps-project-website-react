import { Link } from "react-router-dom"
import { Fragment } from 'react';

const Footer = () => {

  const content = {
    sites: [
      {
        title: "Bentley Group",
        url: "https://bentleygroup.sanger.ac.uk/"
      },
      {
        title: "JUNO",
        url: "https://www.gbsgen.net/"
      },
      {
        title: "Training",
        url: "https://training.bactgen.sanger.ac.uk"
      },
    ],
    contacts: [
      {
        title: "GPS Project",
        url: "mailto:gps@pneumogen.net"
      },
      {
        title: "Stephen Bentley",
        url: "mailto:sdb@sanger.ac.uk"
      },
      {
        title: "Lesley McGee",
        url: "mailto:lmcgee@cdc.gov"
      },
      {
        title: "Stephanie Lo",
        url: "mailto:stephanie.lo@sanger.ac.uk"
      },
    ]
  }

  const SeparatedLinkList = ({title, items}) => (
    <div className="flex flex-col items-center xl:items-start">
      <span className="footer-title normal-case">{title}</span>
      <div className="flex space-x-4">
        {
          items.map((item, index) => (
            <Fragment key={index}>
              {index !== 0 ? <div className="min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div> : ''}
              <Link to={item.url} target="_blank">{item.title}</Link>
            </Fragment>
          ))
        }
      </div>
    </div>
  )

  return (
    <footer className="footer p-10 bg-base-300 justify-between flex flex-col items-center xl:items-start xl:flex-row">
      <img className='w-36 min-w-[9rem]' src='sanger_logo.png' alt="Wellcome Sanger Institute Logo"></img>
      <SeparatedLinkList
        title={'Contacts'}
        items={content.contacts}
      />
      <SeparatedLinkList
        title={'Sites'}
        items={content.sites}
      />
  </footer>
  )
}

export default Footer