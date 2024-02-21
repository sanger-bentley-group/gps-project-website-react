import { BrowserRouter as Router } from 'react-router-dom'
import { Tooltip } from "react-tooltip"

import Navbar from "./components/Navbar";
import Content from './components/Content';
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const getBasename = path => path.substr(0, path.lastIndexOf('/') + 1);

  return (
    <Router basename={getBasename(window.location.pathname)}> 
      <div className='flex flex-col h-screen min-h-[48rem]'>
        <Navbar />
        <Content />
        <Footer />
        <ScrollToAnchor />
        <ScrollToTopButton />
        <Tooltip id="react-tooltip" clickable/>
      </div>
    </Router>
  );
}

export default App;
