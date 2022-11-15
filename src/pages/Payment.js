import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51M4OnHLatzH89E3n3vTGrAjSKtj4zBiPh3MLCUmeID2hfh0bLh40ZusJgGs4N7Af4aEzLjvjs7t27moE0Dr6fMOx00z9v4qy3v"
);

function Payment() {
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;
  return (
    <div className="App">
      <span>{price}</span>
      <span>{title}</span>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
