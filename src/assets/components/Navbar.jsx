import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <a href="">Men</a>
        <a href="">Woman</a>
        <a href="">Jewelery</a>
        <a href="">Electronics</a>
      </div>
      <div className="navMiddle">
        <h2>Tulos</h2>
      </div>
      <div className="navRight">
        <a href="">
          <SearchIcon />
        </a>
        <a href="">
          <LocalMallIcon />
        </a>
        <a href="">
          Login  
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
