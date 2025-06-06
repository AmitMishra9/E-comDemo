import { Outlet } from 'react-router-dom';
import Navbar from "../Component/Header/Navbar.jsx";
import Footer from "../Component/Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </>
  );
};

export default Layout;