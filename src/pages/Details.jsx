import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import naplesImg from "../asset/images/naples.jpg";

const Details = () => {
  const { cityName } = useParams();
  const [name, setName] = useState("");
  const [mainWeather, setMainWeather] = useState("");
  const [mainDesc, setMainDesc] = useState("");
  const [id, setId] = useState(null);
  const [windSpeed, setWindSpeed] = useState(0);
  const [temp, setTemp] = useState(0);
  const [tempMAX, setTempMAX] = useState(0);
  const [tempMIN, setTempMIN] = useState(0);

  useEffect(() => {
    if (cityName) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8aeaa995f2ee75ba856cf630ddb50428&units=metric`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Errore nel fetch: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setName(data.name);
          setMainWeather(data.weather[0].main);
          setMainDesc(data.weather[0].description);
          setId(data.id);
          setWindSpeed(data.wind.speed);
          setTemp(data.main.temp);
          setTempMAX(data.main.temp_max);
          setTempMIN(data.main.temp_min);
        })
        .catch((error) => {
          console.error("Errore durante il fetch:", error);
        });
    }
  }, [cityName]);

  return (
    <div
      className="rounded-lg bg-blue-200 flex flex-col mt-12 mx-32 drop-shadow-md"
      id={id}
    >
      <div className="flex justify-center mt-8 mb-6">
        <img
          src={naplesImg}
          alt="Naples"
          className="rounded-lg drop-shadow-md"
        />
      </div>
      <h2 className="font-bold text-3xl mb-4">{name}</h2>
      <h2 className="mb-4 font-bold">Temperature</h2>
      <div className="flex justify-around mb-8">
        <h2>
          Temperature:{" "}
          <strong className="text-yellow-500  bg-blue-500 p-1 rounded-md">
            {temp}°C
          </strong>
        </h2>
        <p>
          Max Temperature:{" "}
          <strong className="text-yellow-500 bg-blue-500 p-1 rounded-md">
            {tempMAX}°C
          </strong>
        </p>
        <p>
          Min Temperature:{" "}
          <strong className="text-yellow-500  bg-blue-500 p-1 rounded-md">
            {tempMIN}°C
          </strong>
        </p>
      </div>
      <div className="flex justify-around mb-12 font-bold">
        <p className="bg-blue-400 rounded-md p-3">Weather: {mainWeather}</p>
        <p className="bg-blue-400 rounded-md p-3">{mainDesc}</p>
        <p className="bg-blue-400 rounded-md p-3">Wind: {windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default Details;
