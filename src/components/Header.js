import { Link } from "react-router-dom";
import vinted from "/Users/vincentdesmont/LeReacteur/React/jour8/exercice/vinted/src/img/Vinted_logo.png";
import axios from "axios";
import { useState } from "react";

const Header = ({ token, handleToken }) => {
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

      <button className="header-button button-sold">Vends tes articles</button>
    </div>
  );
};

export default Header;
