import { 
  Routes,
  Route
} from "react-router-dom"

import Home from "./Home"
import Contact from "./Contact"

const Content = () => (
  <div className='mb-auto'>
  {
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  }
  </div>
)

export default Content