import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Training from "./Training"
import PageNotFound from "./PageNotFound"

const Content = () => (
  <div className='grow'>
  {
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  }
  </div>
)

export default Content
