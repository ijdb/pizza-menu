import React from "react";
import "./MainPage.css";
import NavItems from "./NavItems";

function MainPage({
  pizzaHandler,
  burgerHandler,
  pizzaMenu,
  burgerMenu,
  homeClick,
  showTitle = true,
}) {
  return (
    <div className="cafe-container">
      <NavItems
        pizzaHandler={pizzaHandler}
        burgerHandler={burgerHandler}
        pizzaMenu={pizzaMenu}
        burgerMenu={burgerMenu}
        homeClick={homeClick}
      />

      {showTitle && (
        <>
          <img className="bgimage" src="image.jpg" />
          <div className="cafe-name">Er Baretto</div>
        </>
      )}
    </div>
  );
}

export default MainPage;
