import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-container">
      <form
        className="signup-form"
        onSubmit={async (event) => {
          event.preventDefault();
          await axios.post(
            `https://site--test-backend--c7br8w6v87r6.code.run/user/signup`,
            {
              username: username,
              email: email,
              password: password,
            }
          );
        }}
      >
        <h2>S'inscire</h2>
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          setState={setUsername}
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          setState={setEmail}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="Mot de passe"
          setPassword={setPassword}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button className="cursor" type="submit" value="Register">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Signup;
