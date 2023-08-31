import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import Outline from "./Outline"
import Team from "./Team"
import Partners from "./Partners"
import CommandLine from "./CommandLine"
import PageNotFound from "./PageNotFound"

const Content = () => (
  <div className='grow'>
  {
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/outline' element={<Outline />} />
        <Route path='/team' element={<Team />} />
        <Route path='/partners' element={<Partners />} />
        <Route path="/command_line" element={<CommandLine />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  }
  </div>
)

export default Content
