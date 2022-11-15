import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const CheckoutForm = ({ title, amount }) => {
  const stripe = useStripe();

  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: Cookies.get("token"),
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://site--test-backend--c7br8w6v87r6.code.run/payment",
        {
          stripeToken: stripeToken,
          title: title,
          amount: amount,
        }
      );

      if (response.data === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      } else {
        alert("Une erreur est survenue");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className=".StripeElement" />
      {isLoading ? (
        <p>Loading...</p>
      ) : completed ? (
        <p>Merci pour votre achat.</p>
      ) : (
        <button type="submit">Pay</button>
      )}
    </form>
  );
};

export default CheckoutForm;
