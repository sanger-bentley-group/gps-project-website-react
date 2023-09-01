import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import CommandLine from "./CommandLine"
import PageNotFound from "./PageNotFound"

const Content = () => (
  <div className='grow'>
  {
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/command_line" element={<CommandLine />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  }
  </div>
)

export default Content
