import { 
  Routes,
  Route
} from "react-router-dom"

import Home from "./Home"
import PageNotFound from "./PageNotFound"

const Content = () => (
  <div className='grow'>
  {
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  }
  </div>
)

export default Content