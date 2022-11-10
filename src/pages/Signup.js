import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await axios.post(
          `https://site--test-backend--c7br8w6v87r6.code.run/user/signup`,
          {
            username: { username },
            email: { email },
            password: { password },
          }
        );
      }}
    >
      <h2>S'inscire</h2>
      <input
        type="text"
        name="username"
        placeholder="Nom d'utilisateur"
        state={username}
        setState={setUsername}
        value={state}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        state={email}
        setState={setEmail}
        value={state}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        name="password"
        placeholder="Mot de passe"
        state={password}
        setPassword={setPassword}
        value={state}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <input type="submit" value="Register" />
    </form>
  );
};

export default Signup;
