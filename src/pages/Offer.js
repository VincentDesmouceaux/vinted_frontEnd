import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Je suis sur la page Offer</div>;
};

export default Offer;
