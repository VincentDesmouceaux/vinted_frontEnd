import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home";

import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

// Components
import Header from "./components/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCheck, faRedo } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faCheck, faRedo);

function App() {
  const [search, setSearch] = useState("");
  const [sortPrice, setSortPrice] = useState(false);

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
          sortPrice={sortPrice}
          setSortPrice={setSortPrice}
        />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} sortPrice={sortPrice} />}
          />

          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/user/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route
            path="/publish"
            element={
              token ? (
                <Publish token={token} />
              ) : (
                <Login handleToken={handleToken} />
              )
            }
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
