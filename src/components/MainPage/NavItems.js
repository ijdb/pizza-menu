import React from "react";
import NavItemComponent from "./NavItemComponent";

function NavItems({
  pizzaHandler,
  burgerHandler,
  pizzaMenu,
  burgerMenu,
  homeClick,
}) {
  return (
    <div className="nav-bar">
      <NavItemComponent
        name="Home"
        clickHandler={homeClick}
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
      <a href="#footer-section">
        <NavItemComponent name="Contact" />
      </a>
    </div>
  );
}

export default NavItems;
