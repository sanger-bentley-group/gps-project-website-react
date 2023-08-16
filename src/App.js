import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
