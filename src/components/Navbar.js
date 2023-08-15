import { Link } from "react-router-dom";

const NavbarContent = () => {
  return (
    <>
      <li><Link to="/">Home</Link></li>
      <li>
        <details>
          <summary>About</summary>
          <ul className="p-2">
            <li><Link to="/outline">Project Outline</Link></li>
            <li><Link to="/team">The Team</Link></li>
            <li><Link to="/partners">Project Partners</Link></li>
            <li><Link to="/substudies">Sub-studies</Link></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Resources</summary>
          <ul className="p-2">
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/countries">Countries</Link></li>
            <li><Link to="/strains">Strains</Link></li>
            <li><Link to="/gpsc_st_lookup_table">GPSC-ST Lookup Table</Link></li>
            <li><Link to="/serotypes">Serotypes</Link></li>
            <li><Link to="/pmen_clones">PMEN Clones</Link></li>
            <li><Link to="/isolate_bank_request">Isolate Bank Request</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to="/publications">Publications</Link></li>
      <li><Link to="/capacity_building">Capacity Building</Link></li>
      <li><Link to="/gps_database">GPS Database</Link></li>
      <li><Link to="/gps_visualiser">GPS Visualiser</Link></li>
      <li>
        <details>
          <summary>Training</summary>
          <ul className="p-2">
            <li><Link to="/gps_tools">GPS Tools</Link></li>
            <li><Link to="/bioinformatics_training">Bioinformatics Training</Link></li>
            <li><Link to="/drag_and_drop_tools">Drag and Drop Tools</Link></li>
            <li><Link to="/command_line">Command Line</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to="/contact">Contact</Link></li>
    </>
  )
}

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavbarContent />
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case">
          <img className='w-10' src='gps_logo.png' alt="GPS Project Logo"></img>
          <div>
            <div className="text-xl text-left">GPS</div>
            <div className="text-xs text-left">Global Pneumococcal Sequencing Project</div>
          </div>
        </Link>
      </div>
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavbarContent />
        </ul>
      </div>
    </div>
  );
}

export default Navbar