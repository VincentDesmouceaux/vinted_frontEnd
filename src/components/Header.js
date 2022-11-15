import { Link } from "react-router-dom";
import vinted from "../img/Vinted_logo.png";

const Header = ({
  token,
  handleToken,
  search,
  setSearch,
  sortPrice,
  setSortPrice,
}) => {
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
            <div className="checkbox">
              {/* <input
                type="checkbox"
                name="price"
                value={sortPrice}
                onChange={(event) => {
                  console.log(event.target.value);
                  setSortPrice(event.target.value);
                }}
              /> */}
              <div className="wrapper">
                <div
                  className="knob"
                  type="checkbox"
                  name="price"
                  value={sortPrice}
                  onChange={() => {
                    setSortPrice(!sortPrice);
                  }}
                >
                  <span>up</span>
                </div>
              </div>
            </div>
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
