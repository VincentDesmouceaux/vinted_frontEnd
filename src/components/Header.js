import { Link } from "react-router-dom";
import vinted from "/Users/vincentdesmont/LeReacteur/React/jour8/exercice/vinted/src/img/Vinted_logo.png";

const Header = ({ token, handleToken, search, setSearch }) => {
  return (
    <div className="header-container">
      <Link to={"/"}>
        <div>
          <img className="header-logo" src={vinted} alt="vinted" />
        </div>
      </Link>
      <div className="search-container">
        <input
          value={search}
          type="text"
          className="search-input"
          placeholder="Recherche des articles"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div>
          <div className="boxfilter">
            <span className="boxfilter2"> Trier par prix : </span>
            <span className="checkbox">
              <input type="checkbox" name="price" />
              <div className="wrapper">
                <div className="knob">
                  <span>up</span>
                </div>
              </div>
            </span>
            <span className="prixentre"> Prix entre :</span>
            <div className="transform"></div>
          </div>
        </div>
      </div>
      <div className="decalage">
        {token ? (
          <Link to={`/login`}>
            <button
              className="header-button button-login-signup cursor colorred "
              onClick={() => {
                handleToken(null);
              }}
            >
              Deconnexion
            </button>
          </Link>
        ) : (
          <>
            <Link to={`/login`}>
              <button className="header-button button-login-signup cursor ">
                Se connecter
              </button>
            </Link>
            <Link to={`/user/signup`}>
              <button className="header-button button-login-signup button-signup cursor">
                S'inscrire
              </button>
            </Link>
          </>
        )}
      </div>
      <Link to={`/publish`}>
        <button className="header-button button-sold">
          Vends tes articles
        </button>
      </Link>
    </div>
  );
};

export default Header;
