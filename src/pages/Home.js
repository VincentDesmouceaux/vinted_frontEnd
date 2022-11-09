import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--test-backend--c7br8w6v87r6.code.run/offers"
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <div className="home-hero-bg-img ">
        {/* <Link to="/details">Aller vers la page details</Link>

      <Link to={`/offer/${id}`}>Aller sur Offer</Link> */}
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