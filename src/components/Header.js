import { Link } from "react-router-dom";
import vinted from "../img/Vinted_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation } from "react-router-dom";
import PriceRange from "./PriceRange";

const Header = ({
  token,
  handleToken,
  search,
  setSearch,
  sortPrice,
  setSortPrice,
  fetchRangeValues,
  setFetchRangeValues,
}) => {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <div className="header-container">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="header-logo" src={vinted} alt="vinted" />
      </div>

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
        <FontAwesomeIcon icon="search" className="search-input-icon" />
        {location.pathname === "/" ? (
          <div>
            <div className="boxfilter">
              <span className="boxfilter2"> Trier par prix : </span>
              <span className="checkbox">
                <input
                  type="checkbox"
                  checked={sortPrice}
                  onChange={() => {}}
                  name="price"
                />
                <div
                  className="wrapper"
                  onClick={() => {
                    setSortPrice(!sortPrice);
                  }}
                >
                  <div className="knob">
                    <span>{sortPrice ? "⇣" : "⇡"}</span>
                  </div>
                </div>
              </span>
              <span className="prixentre"> Prix entre :</span>
              <PriceRange setFetchRangeValues={setFetchRangeValues} />
            </div>
          </div>
        ) : null}
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
