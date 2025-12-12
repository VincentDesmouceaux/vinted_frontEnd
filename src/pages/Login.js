import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://site--talented-doll--c7br8w6v87r6.code.run/user/login",
        {
          email,
          password,
        }
      );

      console.log("LOGIN SUCCESS:", response.data);

      if (response.data.token) {
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error.message);

      if (error.response) {
        console.log(
          "LOGIN ERROR RESPONSE:",
          error.response.status,
          error.response.data
        );

        if (error.response.status === 400) {
          setErrorMessage("Merci de renseigner email et mot de passe.");
        } else if (error.response.status === 401) {
          setErrorMessage("Mauvais email et/ou mot de passe.");
        } else {
          setErrorMessage(
            "Une erreur est survenue. Réessaie plus tard."
          );
        }
      } else {
        // Erreur réseau, certif, etc.
        setErrorMessage(
          "Problème de connexion réseau ou de certificat. Vérifie ta connexion et réessaie."
        );
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Se Connecter</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          placeholder="Adresse email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <span className="signup-login-error-message">{errorMessage}</span>
        <button type="submit">Se connecter</button>
      </form>
      <Link to="/user/signup">Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default Login;
