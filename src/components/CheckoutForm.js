import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
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
        name: "L'id de l'acheteur",
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://site--test-backend--c7br8w6v87r6.code.run/payment",
        {
          stripeToken: stripeToken,
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
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {isLoading ? (
        <p>Loading...</p>
      ) : completed ? (
        <p>Paiement effectué</p>
      ) : (
        <input type="submit" />
      )}
    </form>
  );
};

export default CheckoutForm;
