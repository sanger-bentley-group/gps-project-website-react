import { 
  Routes,
  Route
} from "react-router-dom"

import Home from "./Home"
import CommandLine from "./CommandLine"
import PageNotFound from "./PageNotFound"

const Content = () => (
  <div className='grow'>
  {
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/command_line" element={<CommandLine />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  }
  </div>
)

export default Content