import { HashRouter as Router } from 'react-router-dom'
import { Tooltip } from "react-tooltip"

import Navbar from "./components/Navbar";
import Content from './components/Content';
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  return (
    <Router> 
      <div className='flex flex-col h-screen min-h-[48rem]'>
        <Navbar />
        <Content />
        <Footer />
        <ScrollToAnchor />
        <ScrollToTopButton />
        <Tooltip className='z-50' id="react-tooltip" clickable/>
        <Tooltip className='z-50' id="react-tooltip-click" openOnClick/>
      </div>
    </Router>
  );
}

export default App;
