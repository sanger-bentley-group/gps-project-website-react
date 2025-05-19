import { Link } from "react-router-dom"
import { Fragment } from 'react';

import content from '../content/footerContent'

const assets = import.meta.glob("../assets/logos/*.png", { query: {as: 'meta:src;height;width' }, eager: true }, );

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

const Footer = () => {
  const asset = assets["../assets/logos/sanger_logo.png"]
  return (
    <footer className="footer p-10 bg-base-300 justify-between flex flex-col items-center xl:items-start xl:flex-row">
      <img className='w-36 min-w-[9rem] skeleton' src={asset.src} width={asset.width} height={asset.height} alt="Wellcome Sanger Institute Logo" onLoad={(event) => event.target.classList.remove("skeleton")}></img>
      <LinksWithDivider
        title={content.contacts.title}
        items={content.contacts.content}
      />
      <LinksWithDivider
        title={content.sites.title}
        items={content.sites.content}
      />
    </footer>
  )
}

export default Footer
