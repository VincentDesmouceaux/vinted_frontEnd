import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = ({ handleToken, token }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      setErrorMessage("");

      const response = await axios.post(
        "https://site--test-backend--c7br8w6v87r6.code.run/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      console.log(response.data);

      if (response.data.token) {
        handleToken(response.data.token);

        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);

      if (error.response?.status === 400) {
        setErrorMessage("Veuillez utiliser un email non déjà utilisé :)");
      }

      if (error.response?.status === 402) {
        setErrorMessage("Le username n'est pas renseigné");
      }

      if (error.response?.status === 403) {
        setErrorMessage2("Le mail n'est pas renseigné");
      }

      if (error.response?.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs");
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>S'inscrire</h2>
        <span className="signup-login-error-message">{errorMessage}</span>
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <span className="signup-login-error-message">{errorMessage2}</span>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          type="text"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button className="cursor" type="submit" value="Register">
          S'inscrire
        </button>
        <div className="checkbox-container">
          <div>
            <input
              type="checkbox"
              checked={newsletter}
              onChange={() => {
                setNewsletter(!newsletter);
              }}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
      </form>
      <Link to={`/login`}> Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default Signup;
