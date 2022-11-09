import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const id = 1234567890;
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

      <div className="home-card-wrapper"></div>
    </>
  );
};

export default Home;
