import { useState } from "react";
import axios from "axios";

export default function Form({ setInfo, setState }) {
  const [city, setCity] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Şehrinizi Giriniz");

  const handleClick = () => {
    setPlaceHolder("");
  };

  const reload = () => {
    window.location.reload();
  };

  const handleChange = async () => {
    const api = "def627ce3ca2bba78d919b77cb75eb1f";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
    await axios(baseURL).then((res) => setInfo(res.data)); // Do It With Destructuring
    setState(true);
  };
  return (
    <div>
      <h1>Hava Durumu</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <div className="form">
          <input
            className="inputText"
            type="text"
            placeholder={placeHolder}
            onFocus={handleClick}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Verileri Getir
          </button>
          <button type="submit" className="btn" onClick={reload}>
            Verileri Temizle
          </button>
        </div>
      </form>
    </div>
  );
}
