import { Link } from "react-router-dom"
import { Fragment } from 'react';

const sites = [
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
]

const Footer = () => (
  <footer className="footer items-center p-4 bg-base-300">
    <div className="items-center grid-flow-col">
      <img className='w-28' src='sanger_logo.png' alt="Wellcome Sanger Institute Logo"></img>
    </div> 
    <div className="md:place-self-center md:justify-self-end">
        <span className="footer-title">Sites</span>
        <div className="flex space-x-4">
          {
            sites.map((site, index) => (
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