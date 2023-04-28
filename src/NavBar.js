import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        paddingRight: "32px"
      }}
    >
      <div className="pl-5" style={{ paddingLeft: "8px",display: "flex", alignItems: "center" }}>
        <img
          src="https://via.placeholder.com/45"
          alt="Site Logo"
          style={{ width: "150px", height: "45px" }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span href="#" style={{ color: "white", marginRight: "48px" }}>
          Help
        </span>
        <FontAwesomeIcon icon={faBell} style={{ marginRight: "48px" }} />
        <span>John Doe</span>
      </div>
    </div>
  );
}

export default Header;
