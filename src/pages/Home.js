import { Link } from "react-router-dom";

const Home = () => {
  const id = 1234567890;
  return (
    <div>
      <p>Je suis sur la page Home</p>

      <Link to="/details">Aller vers la page details</Link>

      <Link to={`/offer/${id}`}>Aller sur Offer</Link>
    </div>
  );
};

export default Home;
