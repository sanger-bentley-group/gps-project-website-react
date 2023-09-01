import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Content from './components/Content';
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';

function App() {
  return (
    <Router>
      <div className='flex flex-col h-screen min-h-[48rem]'>
        <Navbar />
        <Content />
        <Footer />
        <ScrollToAnchor />
      </div>
    </Router>
  );
}

export default App;
