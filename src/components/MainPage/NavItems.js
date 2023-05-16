import React from "react";
import NavItemComponent from "./NavItemComponent";

function NavItems({ pizzaHandler, burgerHandler, pizzaMenu, burgerMenu }) {
  return (
    <div className="nav-bar">
      <NavItemComponent
        name="Home"
        className={`${!burgerMenu && !pizzaMenu ? "active" : ""}`}
      />
      <NavItemComponent
        name="Pizza Menu"
        clickHandler={pizzaHandler}
        className={`${pizzaMenu ? "active" : ""}`}
      />
      <NavItemComponent
        name="Burger Menu"
        clickHandler={burgerHandler}
        className={`${burgerMenu ? "active" : ""}`}
      />
      <NavItemComponent name="Contact" />
    </div>
  );
}

export default NavItems;
