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
    <div className="payment-wrapper">
      <div className="payment-container">
        <div className="payment-card summary">
          <div className="title">Résumé de la commande</div>
          <div className="content">
            <ul>
              <li>
                Commande
                <span>{price.toFixed(2)}€</span>
              </li>
              <li>
                Frais protection acheteurs
                <span>40.00€</span>
              </li>
              <li>
                Frais de port
                <span>80.00€</span>
              </li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="content">
            <ul>
              <li class="bold">
                Total
                <span>{price + 40 + 80} €</span>
              </li>
            </ul>
          </div>
          <div className="payment-card">
            <div className="content">
              Il ne vous reste plus qu'un étape pour vous offrir
              <span className="bold"> {title} </span>.Vous allez payer
              <span className="bold"> {price}€</span> (frais de protection et
              frais de port inclus).
              <div className="divider"></div>
            </div>
          </div>

          <Elements stripe={stripePromise}>
            <CheckoutForm title={title} amount={price} />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default Payment;
