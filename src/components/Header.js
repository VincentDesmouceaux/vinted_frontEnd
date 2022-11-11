import { Link } from "react-router-dom";
import vinted from "/Users/vincentdesmont/LeReacteur/React/jour8/exercice/vinted/src/img/Vinted_logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <Link to={"/"}>
        <div>
          <img className="header-logo" src={vinted} alt="vinted" />
        </div>
      </Link>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Recherche des articles"
        />
      </div>
      <div>
        <Link to={`/user/signup`}>
          <button className="header-button button-login-signup button-signup cursor">
            S'inscrire
          </button>
        </Link>
        <Link to={`/login`}>
          <button className="header-button button-login-signup cursor ">
            Se connecter
          </button>
        </Link>
      </div>
      <button className="header-button button-sold">Vends tes articles</button>
    </div>
  );
};

export default Header;
