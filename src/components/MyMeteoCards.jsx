//https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=8aeaa995f2ee75ba856cf630ddb50428  API EX
import React, { useState, useEffect } from "react";
import sole from "../asset/images/sole.png";
import { useNavigate } from "react-router-dom";

const MyMeteoCards = ({ cityName }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mainWeather, setMainWeather] = useState("");
  const [mainDesc, setMainDesc] = useState("");
  const [id, setId] = useState(null);
  const [windSpeed, setWindSpeed] = useState(0);

  const handleCard = (e) => {
    e.preventDefault();

    navigate(`/details/${cityName}`);
  };

  useEffect(() => {
    // Funzione fetch
    if (cityName) {
      const apiKey = "8aeaa995f2ee75ba856cf630ddb50428"; // Sostituisci con la tua chiave API
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Errore nel fetch: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Popola gli stati con i dati ricevuti
          setName(data.name);
          setMainWeather(data.weather[0].main);
          setMainDesc(data.weather[0].description);
          setId(data.id);
          setWindSpeed(data.wind.speed);
        })
        .catch((error) => {
          console.error("Errore durante il fetch:", error);
        });
    }
  }, [cityName]);

  return (
    <div onClick={handleCard} role="button">
      <div
        className="bg-blue-200 rounded-lg flex flex-col items-center hover:bg-blue-700 py-4 hover:text-white"
        id={id || "N/A"}
      >
        <img className=" w-52" src={sole} alt="immagine sole" />
        <h2 className="font-bold">{name || "Cittá Sconosciuta"}</h2>
        <div className="flex justify-around gap-6">
          <p>
            Weather: <strong>{mainWeather || "N/A"}</strong>
          </p>
          <p>Wind Speed: {windSpeed || "N/A"} m/s</p>
        </div>
        <p>Description: {mainDesc || "N/A"}</p>
      </div>
    </div>
  );
};

export default MyMeteoCards;
