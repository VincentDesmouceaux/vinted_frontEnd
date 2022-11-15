import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = ({ token, handleToken }) => {
  console.log(token);
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);

      await axios.post(
        `https://site--test-backend--c7br8w6v87r6.code.run/offer/publish`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,

            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/");
      // console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handlSizelChange = (event) => {
    setSize(event.target.value);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleConditionrChange = (event) => {
    setCondition(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="publish-main">
      <div className="publish-container">
        <h2>Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div className="file-select">
            <div className="dashed-preview-without">
              <div className="input-design-default">
                <label htmlFor="picture" className="label-file">
                  <span className="input-sign">+</span>
                  <span>Ajoute une photo</span>
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="picture"
                  onChange={(event) => {
                    setPicture(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                type="text"
                name="title"
                placeholder="ex: Chemise Sézane verte"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
                name="description"
                id="description"
                rows="5"
                placeholder="ex: porté quelquefois, taille correctement"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                name="selectedBrand"
                placeholder="ex: Zara"
                id="selectedBrand"
                value={brand}
                onChange={handleBrandChange}
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <input
                type="text"
                name="selectedSize"
                placeholder="ex: L / 40 / 12"
                id="selectedSize"
                value={size}
                onChange={handlSizelChange}
              />
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                name="color"
                placeholder="ex: Fushia"
                id="color"
                value={color}
                onChange={handleColorChange}
              />
            </div>
            <div className="text-input">
              <h4>Etat</h4>
              <input
                type="text"
                name="condition"
                placeholder="ex: Neuf avec étiquette"
                id="wearRate"
                value={condition}
                onChange={handleConditionrChange}
              />
            </div>

            <div className="text-input">
              <h4>Lieu</h4>

              <input
                type="text"
                name="city"
                placeholder="ex: Paris"
                id="city"
                value={city}
                onChange={handleCityChange}
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Prix</h4>
              <div className="checkbox-section">
                <input
                  type="text"
                  name="price"
                  placeholder="0,00€"
                  id="city"
                  value={price}
                  onChange={handlePriceChange}
                />
                <div className="checkbox-input">
                  <label htmlFor="exchange" className="checkbox-design"></label>
                  <input
                    type="checkbox"
                    name="exchange"
                    checked={newsletter}
                    onChange={() => {
                      setNewsletter(!newsletter);
                    }}
                  />
                  <span>Je suis intéressé(e) par les échanges</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-button-div">
            <button type="submit " className="form-validation">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
