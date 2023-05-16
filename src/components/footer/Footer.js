import React from "react";
import "./footer.css";
import { MdEmail } from "react-icons/md";

function Footer({ data }) {
  return (
    <footer className="footer-section">
      {data.map((item) => (
        <div className="foot-con">
          {item.icon}
          <div className="foot-name">{item.name}</div>
          <div className="foot-greeting">{item.greeting}</div>
          <div className="end-text">{item.endText}</div>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
