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
        title: 'Projet Partners',
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
  <Link onClick={deactivate} to={url}><label tabIndex={0} className="btn btn-ghost btn-xs rounded-btn">{title}</label></Link>
)

const ListItem = ({ title, url }) => (
  <li onClick={deactivate}><Link to={url}>{title}</Link></li>
)

const DropdownButton = ({ title, submenu }) => (
  <>
    <div className="dropdown dropdown-hover dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-xs rounded-btn">{title}</label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      { submenu.map((item , index) => <ListItem title={item.title} url={item.url} key={index}/>) }
      </ul>
    </div>
  </>
)

const TwoLevelMenuItem = ({ title, submenu }) => (
  <li>
    <div>{title}</div>
    <ul className="p2">
    { submenu.map((item , index) => <ListItem title={item.title} url={item.url} key={index}/>) }
    </ul>
  </li>
)

const NavbarItems = ({ variant }) => (
  NavbarContent.map((content, index) => (
    variant === 'main' ? 
      (
        content.submenu ?
          <DropdownButton title={content.title} submenu={content.submenu} key={index} />
        :
          <Button title={content.title} url={content.url} key={index} />
      )
    :
      (
        content.submenu ?
          <TwoLevelMenuItem title={content.title} submenu={content.submenu} key={index} />
        :
          <ListItem title={content.title} url={content.url} key={index} />
      )
  ))
)

const Navbar = () => (
  <div className="navbar bg-primary text-primary-content h-20">
    <div className="flex-1">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <NavbarItems variant='side'/>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost normal-case h-20">
        <img className='w-14' src='gps_logo.png' alt="GPS Project Logo"></img>
        <div>
          <div className="text-xl text-left">GPS</div>
          <div className="text-xs text-left">Global Pneumococcal</div>
          <div className="text-xs text-left">Sequencing Project</div>
        </div>
      </Link>
    </div>
    <div className="flex-none hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <NavbarItems variant='main' />
      </ul>
    </div>
  </div>
)

export default Navbar