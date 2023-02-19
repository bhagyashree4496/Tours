import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tourcards from "./Tourcards";
import "./tour.css";
const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    settours(newTours);
  };
  const fetchtours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();

      console.log(tours);
      setloading(false);
      settours(tours);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchtours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div>
          <h1>no tours left</h1>
          <button className="button" onClick={() => fetchtours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return <Tourcards tours={tours} removeTour={removeTour}></Tourcards>;
}
