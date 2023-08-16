import { 
  Routes,
  Route
} from "react-router-dom"

import Home from "./Home"
import Contact from "./Contact"
import PageNotFound from "./PageNotFound"

const Content = () => (
  <div className='mb-auto'>
  {
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  }
  </div>
)

export default Content