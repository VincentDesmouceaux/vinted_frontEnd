import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import tear from "../img/tear.svg";
const Home = ({ search, sortPrice, fetchRangeValues }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(
      `https://site--test-backend--c7br8w6v87r6.code.run/offers?title=${search}&sort=${sortPrice}`
    );
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--test-backend--c7br8w6v87r6.code.run/offers?title=${search}&sort=${
            sortPrice ? "price-desc" : "price-asc"
          }&priceMin=${fetchRangeValues[0]}&priceMax=${fetchRangeValues[1]}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, sortPrice, fetchRangeValues]);

  return isLoading ? (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#2CB1BA"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass="home-loader"
      visible={true}
    />
  ) : (
    <>
      <div className="home-hero-bg-img ">
        <img src={tear} alt="form" className="home-hero-forme" />
        <div>
          <div className="home-hero-ready">
            Prêts à faire du tri dans vos placards ?
            <button
              className="home-hero-ready button"
              onClick={() => {
                navigate("/publish");
              }}
            >
              Commencer à vendre
            </button>
          </div>
        </div>
      </div>
      <div className="home-card-wrapper">
        {data.offers.map((offer, index) => {
          return (
            <Link
              to={`/offer/${offer._id}`}
              className="card-container"
              key={index}
            >
              <div className="card-avatar-username">
                <span>{offer.owner.account.username}</span>
              </div>
              <div>
                <img src={offer.product_image.url} alt="offer" />
                <div className="card-price-size-brand">
                  <span>{offer.product_price}€</span>
                  <span>{offer.product_details[1].TAILLE}</span>
                  <span>{offer.product_details[0].MARQUE}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
