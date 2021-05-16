import { IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Logo from "./picture/image 52.png";
import bagLogo from "./picture/Vector (Stroke).png";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <img src={Logo} />
      <div id="right_nav">
        <div className="searchContainer">
          <div className="searchBox">
            <Search />
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <IconButton>
          <p>Help</p>
        </IconButton>
        <IconButton>
          <p>Account</p>
        </IconButton>
        <IconButton>
          <img src={bagLogo} />
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;
