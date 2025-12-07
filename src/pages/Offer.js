import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--talented-doll--c7br8w6v87r6.code.run/offer/" + id
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

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
    <div className="offer-body">
      <div className="offer-container">
        <div className="offer-pictures">
          <img
            className="offer-picture"
            src={data.product_image.url}
            alt="Air Max 90, très peu portées"
          />
        </div>
        <div className="offer-infos">
          <div>
            <span className="offer-price"> {data.product_price} €</span>
            <ul className="offer-list">
              {data.product_details.map((detail, index) => {
                const objectKey = Object.keys(detail)[0];

                return (
                  <li key={index}>
                    <span>{objectKey}</span> <span> {detail[objectKey]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="divider"></div>
          <div className="offer-content">
            <p className="name">{data.product_name}</p>
            <p className="description">{data.description}</p>
            <div className="offer-avatar-username">
              <span>{data.owner.account.username}</span>
            </div>
          </div>
          <Link
            to={`/payment`}
            state={{ title: data.product_name, price: data.product_price }}
          >
            <button>Acheter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
