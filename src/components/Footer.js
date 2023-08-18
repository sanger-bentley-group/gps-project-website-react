import { Link } from "react-router-dom"
import { Fragment } from 'react';

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
      name: "GPS Project",
      email: "gps@pneumogen.net"
    },
    {
      name: "Stephen Bentley",
      email: "sdb@sanger.ac.uk"
    },
    {
      name: "Lesley McGee",
      email: "lmcgee@cdc.gov"
    },
    {
      name: "Stephanie Lo",
      email: "stephanie.lo@sanger.ac.uk"
    },
  ]
}

const Footer = () => (
  <footer className="footer p-10 bg-base-300 justify-between">
    <img className='w-36 min-w-[9rem]' src='sanger_logo.png' alt="Wellcome Sanger Institute Logo"></img>
    <div>
      <span className="footer-title normal-case">Contacts</span>
      <div className="flex shrink-0 space-x-4">
        {
          content.contacts.map((contact, index) => (
            <Fragment key={index}>
              {index !== 0 ? <div className="min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div> : ''}
              <a href={`mailto:${contact.email}`}>{contact.name}</a>
            </Fragment>
          ))
        }
      </div>
    </div>
    <div>
      <span className="footer-title normal-case">Sites</span>
      <div className="flex space-x-4">
        {
          content.sites.map((site, index) => (
            <Fragment key={index}>
              {index !== 0 ? <div className="min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div> : ''}
              <Link to={site.url} target="_blank">{site.title}</Link>
            </Fragment>
          ))
        }
      </div>
    </div>
  </footer>
)

export default Footer