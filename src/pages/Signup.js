import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
const handleSubmit = 
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `https://site--test-backend--c7br8w6v87r6.code.run/user/${token}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [token]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/");
      }}
    >
      <h2>S'inscire</h2>
      <input type="text"  name="username" placeholder="Nom d'utilisateur" state={username} setState={setUsername}/>
      <input type="text" name = "email"  placeholder="email"
      state={email} setState={setEmail}/>
      <input type="text" name="password" placeholder="Mot de passe" state ={password} setPassword={setPassword} />

      <input type="submit" value="Register" />
    </form>
  );
};

export default Signup;
