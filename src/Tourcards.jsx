import React from "react";
import Tour from "./Tour";
import "./tour.css";

function Tourcards({ tours, removeTour }) {
  // let tourss = Array.from(tours);
  return (
    <section>
      <h1>Our Tours</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
      })}
    </section>
  );
}

export default Tourcards;
