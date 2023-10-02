import React, { useState } from "react";
import "../../assets/styles/Navbar.css";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";


function Navbar() {
  const [openProfile, setOpenProfile] = useState(false)
  return (
    <>
      <div className="navigation-wrapper">
        <div className="navigation-upper-wrapper">
          <div className="upper-wrapper-left">
            <img className="logo" src={Logo} alt="logo" />
            <p className="logo-text">An ODOP initiative</p>
          </div>
          <div className="upper-wrapper-right">
            <input  className="search-bar" type="text" placeholder="Search.." />
            <Link to='/login'><button className="login-btn">Login</button></Link>
          </div>
        </div>
      </div>
      <div className="navigation-lower-wrapper">
        <nav>
          <ul className="nav-menu">
            <Link to="/"><li>Home</li></Link>
            <li >About</li>
            <li  ><span className="category-button" onClick={()=>setOpenProfile((prev)=>
              !prev
            )}>Categories</span> {openProfile && <Dropdown/>}</li>
            <li>Offers</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
