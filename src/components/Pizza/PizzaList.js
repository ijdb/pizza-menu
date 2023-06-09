import React from "react";
import PizzaItemComponent from "./PizzaItemComponent";
import "./pizza.css";

function PizzaList({ data }) {
  return (  
    <div className="pizzaList">
      {data.map((item) => (
        <PizzaItemComponent item={item} />
      ))}
    </div>
  );
}

export default PizzaList;
