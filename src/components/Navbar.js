import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import content from '../content/navbarContent'
import publicationsContent from '../content/publicationsContent'

import { ReactComponent as NewWindowIcon} from './new_window_icon.svg'
import gpsLogo from './gps_logo.png'

// Both variables should have the same breakpoint prefix
// Using a const to insert the prefix does not work properly
const breakpointHidden = 'xl:hidden'
const breakpointFlex = 'xl:flex'

const deactivate = () => {
  const elem = document.activeElement
  if (elem) { elem.blur() }
}

const Button = ({ title, url, external }) => (
  external 
  ? 
    <a onClick={deactivate} href={url} target="_blank" rel="noreferrer">
      <label tabIndex={0} className="btn btn-ghost btn-s rounded-btn">
        <NewWindowIcon className="stroke-current h-5" />
        {title}
      </label>
    </a>
  : 
    <Link onClick={deactivate} to={url}><label tabIndex={0} className="btn btn-ghost btn-s rounded-btn">{title}</label></Link>
)

const ListItem = ({ title, url, external }) => (
  external
  ? 
    <li onClick={deactivate}>
      <a href={url} target="_blank" rel="noreferrer">
        <NewWindowIcon className="stroke-current h-3" />
        {title}
      </a>
    </li>
  : 
    <li onClick={deactivate}><Link to={url}>{title}</Link></li>
)

const DropdownButton = ({ title, url, submenu }) => (
  <div className="dropdown dropdown-hover dropdown-end">
    <Link onClick={deactivate} to={url}><label tabIndex={0} className="btn btn-ghost btn-s rounded-btn">{title}</label></Link>
    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      { submenu.map((item , index) => <ListItem {...item} key={index}/>) }
    </ul>
  </div>
)

const TwoLevelMenuItem = ({ title, url, submenu }) => (
  <li>
    <Link onClick={deactivate} to={url}><div>{title}</div></Link>
    <ul className="p2">
      { submenu.map((item , index) => <ListItem {...item} key={index}/>) }
    </ul>
  </li>
)

const NavbarItems = ({ variant }) => {
  const [navbarContent, setNavBarContent] = useState(content)
  const addedPublicationsSubmenu = useRef(false)

  useEffect(() => {
    if (addedPublicationsSubmenu.current) { return }

    setNavBarContent(
      navbarContent => navbarContent.map((item) => {
        if (item.title === 'Publications') {
          item.submenu = publicationsContent.sections.map((section) => (
            {
              title: section.subtitle.content,
              url: `publications#${section.subtitle.content.replace(/\s+/g, '-').toLowerCase()}`
            }
          ))
        }
        
        return item
      })
    )
    addedPublicationsSubmenu.current = true
  }, []) 

  return (
    navbarContent.map((content, index) => (
      variant === 'main' ? 
        (
          content.submenu ?
            <DropdownButton {...content} key={index} />
          :
            <Button {...content} key={index} />
        )
      :
        (
          content.submenu ?
            <TwoLevelMenuItem {...content} key={index} />
          :
            <ListItem {...content} key={index} />
        )
    ))
  )
}

const Navbar = () => (
  <div className="navbar bg-primary text-primary-content h-24 min-h-[6rem]">
    <div className="flex-1">
      <div className="dropdown">
        <label tabIndex={0} className={`btn btn-ghost ${breakpointHidden}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className={`menu menu-sm w-max dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box ${breakpointHidden}`}>
          <NavbarItems variant='side'/>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost h-20 min-h-[5rem]">
        <img className='h-20 min-h-[5rem]' src={gpsLogo} alt="GPS Project Logo"></img>
      </Link>
    </div>
    <div className={`flex-none hidden ${breakpointFlex}`}>
      <ul className="menu menu-horizontal px-1 space-x-3">
        <NavbarItems variant='main' />
      </ul>
    </div>
  </div>
)

export default Navbar
