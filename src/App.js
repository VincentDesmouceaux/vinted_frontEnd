import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

// Components
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");

  const [token, setToken] = useState(Cookies.get("token") || null);
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };
  return (
    <div>
      <Router>
        <Header
          token={token}
          handleToken={handleToken}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/details" element={<Details />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/user/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
