import "../header/header.css";
import logo from "../../assets/LOGO.png";
//import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapperHeaders">
      <div className="headers">
        <div className="contentLogo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
           <li>Accueil</li>
           <li>A Propos</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;