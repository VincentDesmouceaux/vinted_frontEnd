import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img
          className="header-logo"
          src="public/assets/img/Vinted_logo.png"
          alt="vinted"
        />
      </div>

      <Link to="/details">Vers details</Link>
    </div>
  );
};

export default Header;
