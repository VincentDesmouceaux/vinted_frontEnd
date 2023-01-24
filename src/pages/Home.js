import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
const Home = ({ search, sortPrice }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(
      `https://site--test-backend--c7br8w6v87r6.code.run/offers?title=${search}&sort=${sortPrice}`
    );
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--test-backend--c7br8w6v87r6.code.run/offers?title=${search}&sort=${
            sortPrice ? "price-desc" : "price-asc"
          }`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, sortPrice]);

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
      <div className="home-hero-bg-img "></div>
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
