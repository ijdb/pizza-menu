import React from "react";
import "./MainPage.css";
import NavItems from "./NavItems";

function MainPage({
  pizzaHandler,
  burgerHandler,
  pizzaMenu,
  burgerMenu,
  showTitle = true,
}) {
  return (
    <div className="cafe-container">
      <NavItems
        pizzaHandler={pizzaHandler}
        burgerHandler={burgerHandler}
        pizzaMenu={pizzaMenu}
        burgerMenu={burgerMenu}
      />
      {showTitle && <div className="cafe-name">Er Baretto</div>}
    </div>
  );
}

export default MainPage;
