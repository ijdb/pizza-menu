import React from "react";

function PizzaItemComponent({ item }) {
  return (
    <div className="pizza-container">
      <img className="pizza-img" src={item.image} />
      <div className="pizza-title">{item.title}</div>
      <div className="pizza-summ">{item.summary}</div>
      <div className="pizza-price">${item.price}</div>
    </div>
  );
}

export default PizzaItemComponent;
