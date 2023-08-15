import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li>
              <summary>About</summary>
              <ul className="p-2">
                <li><Link to="/outline">Project Outline</Link></li>
                <li><Link to="/team">The Team</Link></li>
                <li><Link to="/partners">Project Partners</Link></li>
                <li><Link to="/substudies">Sub-studies</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
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
          <li><Link to="/">Home</Link></li>
          <li tabIndex={0}>
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
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar