import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <h2>Se Connecter</h2>
      <form
        className="signup-form"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post(
              "https://site--test-backend--c7br8w6v87r6.code.run/user/login",
              {
                email,
                password,
              }
            );
            console.log(response.data);

            if (response.data.token) {
              handleToken(response.data.token);

              navigate("/");
            }
          } catch (error) {
            console.log(error.message);
            console.log(error.response.data);
            if (error.response?.status === 405) {
              setErrorMessage("Mauvais email et/ou mot de passe  ");
            }
          }
        }}
      >
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
        <button type="submit"> Se connecter</button>
      </form>
      <Link to={`/user/signup`}> Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default Login;
