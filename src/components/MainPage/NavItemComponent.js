import React from "react";

function NavItemComponent({ name, className = "", clickHandler = () => {} }) {
  return (
    <button className={`${className} item`} onClick={clickHandler}>
      {name}
    </button>
  );
}

export default NavItemComponent;
