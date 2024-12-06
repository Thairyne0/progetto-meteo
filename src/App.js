import "./App.css";
import MyNavBar from "./components/MyNavBar";

import Home from "./pages/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavBar></MyNavBar>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/details/:cityName"
            element={<Details></Details>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
