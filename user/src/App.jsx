
import Topheader from './Components/Topheader'
import Home from './Page/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Roots/Layout';
import CZleftbanner from './Components/CZleftbanner';
import MyWishlists from './Components/MyWishlists.jsx';
function App() {

  return (
    <Router>
      <Routes>
        {/* Parent Route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="compare" element={<CZleftbanner />} />
          <Route path="wishlist" element={<MyWishlists />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
