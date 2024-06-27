import { useEffect, useState } from "react";
import "./App.css";
import Search from "../components/Search";
import Restaurant from "../components/Restaurant";
import Card from "../components/Card";
import Header from "../components/Header";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurant")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
        setFilterRestaurants(response);
      })
      .catch((err) => {
        console.error("err", err);
      });
  }, []);

  return (
    <>
      <div className="container flex flex-col items-center m-auto space-y-6">
        <Header />

        <Search
          restaurants={restaurants}
          setFilterRestaurants={setFilterRestaurants}
        />
        <Restaurant restaurants={filterRestaurants} />
      </div>
    </>
  );
}

export default App;
