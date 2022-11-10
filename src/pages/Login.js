import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        const response = await axios.post(
          `https://site--test-backend--c7br8w6v87r6.code.run/user/signup`,
          {
            email: email,
            password: password,
          }
        );

        handleToken(response.data.token);

        navigate("/");
      }}
    >
      <input
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};

export default Login;
