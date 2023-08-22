import { Link } from "react-router-dom"
import { Fragment } from 'react';

import content from '../content/footerContent'


const Footer = () => {
  const LinksWithDivider = ({title, items}) => (
    <div className="flex flex-col items-center xl:items-start">
      <span className="footer-title normal-case">{title}</span>
      <div className="flex space-x-4">
        {
          items.map((item, index) => (
            <Fragment key={index}>
              {index !== 0 ? <div className="divider divider-horizontal"></div> : ''}
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
      <LinksWithDivider
        title={'Contacts'}
        items={content.contacts}
      />
      <LinksWithDivider
        title={'Sites'}
        items={content.sites}
      />
  </footer>
  )
}

export default Footer