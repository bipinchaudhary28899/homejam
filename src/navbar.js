import { IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Logo from "./picture/image 52.png";
import bagLogo from "./picture/Vector (Stroke).png";
import "./navbar.css";
import React, { Component } from 'react';

  class NavBar extends Component {
    closemenu=()=> {
      document.getElementsByClassName("toggler").style.display="none";
    }
  render() { 
   
    return ( 
      <nav>
      <img src={Logo} />
      <div id="right_nav">
        <div className="searchContainer mobile_view">
          <div className="searchBox">
            <Search />
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <IconButton className="mobile_view">
          <p>Help</p>
        </IconButton>
        <IconButton className="mobile_view">
          <p>Account</p>
        </IconButton>
        <IconButton className="mobile_view">
          <img src={bagLogo} />
        </IconButton>
        
      </div>
    </nav>
     );
  }
}
 
export default NavBar;


