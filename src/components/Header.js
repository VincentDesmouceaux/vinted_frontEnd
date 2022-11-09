import { Link } from "react-router-dom";
import vinted from "/Users/vincentdesmont/LeReacteur/React/jour8/exercice/vinted/src/img/Vinted_logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img className="header-logo" src={vinted} alt="vinted" />
      </div>
      <div className="search-container">
        <input
          type="text"
          class="search-input"
          placeholder="Recherche des articles"
        />
        <div>
          <button className="header-button button-login-signup button-signup">
            S'inscrire
          </button>
          <button className="header-button button-login-signup">
            Se connecter
          </button>
        </div>
        <button className="header-button button-sold">
          Vends tes articles
        </button>
      </div>
    </div>
  );
};

export default Header;
