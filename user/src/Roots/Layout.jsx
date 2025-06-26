import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Topheader from '../Components/Topheader';
import Footer from '../Components/Footer';
import ScrollToTopButton from '../Components/ScrollToTopButton';

function Layout() {
  return (
    <div>
       
       <Topheader />
      
      {/* Render nested routes here */}
      <div className="">
        <Outlet />
      </div>
      <Footer />
      
      <button className="...">
        <ScrollToTopButton />
      </button>
    </div>
  );
}

export default Layout