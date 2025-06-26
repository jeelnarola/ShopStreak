import Topheader from "./Components/Topheader";
import Home from "./Page/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Layout from "./Roots/Layout";
import CZleftbanner from "./Components/CZleftbanner";
import MyWishlists from "./Components/MyWishlists.jsx";
import MyCart from "./Components/MyCart.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="compare" element={<CZleftbanner />} />
          <Route path="wishlist" element={<MyWishlists />} />
          <Route path="cart" element={<MyCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
