import MyMeteoCards from "../components/MyMeteoCards";
import MySearchBar from "../components/MySearchBar";

const Home = () => {
  return (
    <div>
      <MySearchBar></MySearchBar>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 rounded-lg bg-blue-500 gap-8 mt-12 px-8">
        <MyMeteoCards cityName={"Rome"}></MyMeteoCards>

        <MyMeteoCards cityName={"Seoul"}></MyMeteoCards>

        <MyMeteoCards cityName={"London"}></MyMeteoCards>

        <MyMeteoCards cityName={"Madrid"}></MyMeteoCards>

        <MyMeteoCards cityName={"Tokyo"}></MyMeteoCards>
      </div>
    </div>
  );
};

export default Home;
