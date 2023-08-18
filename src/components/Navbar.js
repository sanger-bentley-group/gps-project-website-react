import { Link } from "react-router-dom";

const NavbarContent = [
  {
    title: 'About',
    submenu: [
      {
        title: 'Project Outline',
        url: '/outline',
      },
      {
        title: 'The Team',
        url: '/team',
      },
      {
        title: 'Project Partners',
        url: '/partners',
      },
      {
        title: 'Sub-studies',
        url: '/substudies',
      },
    ]
  },
  {
    title: 'Resources',
    submenu: [
      {
        title: 'Overview',
        url: '/overview',
      },
      {
        title: 'Countries',
        url: '/countries',
      },
      {
        title: 'Strains',
        url: '/strains',
      },
      {
        title: 'GPSC-ST Lookup Table',
        url: '/gpsc_st_lookup_table',
      },
      {
        title: 'Serotypes',
        url: '/serotypes',
      },
      {
        title: 'PMEN Clones',
        url: '/pmen_clones',
      },
      {
        title: 'Isolate Bank Request',
        url: '/isolate_bank_request',
      },
    ]
  },
  {
    title: 'Publications',
    url: '/publications'
  },
  {
    title: 'Capacity Building',
    url: '/capacity_building'
  },
  {
    title: 'GPS Database',
    url: '/gps_database'
  },
  {
    title: 'GPS Visualiser',
    url: '/gps_visualiser'
  },
  {
    title: 'Training',
    submenu: [
      {
        title: 'GPS Tools',
        url: '/gps_tools',
      },
      {
        title: 'Bioinformatics Training',
        url: '/bioinformatics_training',
      },
      {
        title: 'Drag and Drop Tools',
        url: '/drag_and_drop_tools',
      },
      {
        title: 'Command Line',
        url: '/command_line',
      },
    ]
  },
  {
    title: 'Contact',
    url: '/contact'
  }
]

const deactivate = () => {
  const elem = document.activeElement
  if (elem) { elem.blur() }
}

const Button = ({ title, url }) => (
  <Link onClick={deactivate} to={url}><label tabIndex={0} className="btn btn-ghost btn-s rounded-btn normal-case">{title}</label></Link>
)

const ListItem = ({ title, url }) => (
  <li onClick={deactivate}><Link to={url}>{title}</Link></li>
)

const DropdownButton = ({ title, submenu }) => (
  <>
    <div className="dropdown dropdown-hover dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-s rounded-btn normal-case">{title}</label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      { submenu.map((item , index) => <ListItem {...item} key={index}/>) }
      </ul>
    </div>
  </>
)

const TwoLevelMenuItem = ({ title, submenu }) => (
  <li>
    <div>{title}</div>
    <ul className="p2">
    { submenu.map((item , index) => <ListItem {...item} key={index}/>) }
    </ul>
  </li>
)

const NavbarItems = ({ variant }) => (
  NavbarContent.map((content, index) => (
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

const Navbar = () => {
  // Both variables should have the same breakpoint prefix
  const breakpointHidden = 'xl:hidden'
  const breakpointFlex = `xl:flex`

  return (
    <div className="navbar bg-primary text-primary-content h-24 min-h-[6rem]">
      <div className="flex-1">
        <div className="dropdown">
          <label tabIndex={0} className={`btn btn-ghost ${breakpointHidden}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${breakpointHidden}`}>
            <NavbarItems variant='side'/>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost h-20 min-h-[5rem]">
          <img className='h-20 min-h-[5rem]' src='gps_logo.png' alt="GPS Project Logo"></img>
        </Link>
      </div>
      <div className={`flex-none hidden ${breakpointFlex}`}>
        <ul className="menu menu-horizontal px-1 space-x-3">
          <NavbarItems variant='main' />
        </ul>
      </div>
    </div>
  )
}

export default Navbar