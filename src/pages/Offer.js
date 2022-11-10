import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--test-backend--c7br8w6v87r6.code.run/offer/" + id
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="offer-body">
      <div className="offer-container">
        <div className="offer-pictures">
          <img
            src={data.product_image.url}
            alt="Air Max 90, très peu portées"
          />
        </div>
        <div className="offer-infos">
          <div>
            <span className="offer-price"> {data.product_price} €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
