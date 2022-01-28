import React from "react";
import SearchBar from "../../components/ui/SearchBar";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <div className="nav-appname hide-sm">Travel Advisor</div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
