import React from "react";
import "./footer.css";

function Footer({ data }) {
  return (
    <footer className="footer-section">
      {data.map((item) => (
        <div className="foot-con">
          <div className="icon">{item.icon()}</div>
          <div className="foot-name">{item.name}</div>
          <div className="foot-greeting">{item.greeting}</div>
          <div className="end-text">{item.endText}</div>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
