import React from "react";
import SidebarOptions from "./SidebarOptions";

import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const restaurants = useSelector((state) => state.restaurants);
  React.useEffect(() => {
    console.log("in sidebar", restaurants);
  }, [restaurants]);
  return (
    <div className="container">
      <h1>Food & Dining around you</h1>
      <div className="container-selects">
        <SidebarOptions />
      </div>
      <ul className="container-list">
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </ul>
    </div>
  );
};

export default Sidebar;
