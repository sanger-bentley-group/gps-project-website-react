import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Publications from "./Publications"
import CapacityBuilding from "./CapacityBuilding"
import Training from "./Training"
import PageNotFound from "./PageNotFound"

const Content = () => (
  <div className='grow bg-base-200'>
  {
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/capacity-building' element={<CapacityBuilding />} />
        <Route path="/training" element={<Training />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  }
  </div>
)

export default Content
