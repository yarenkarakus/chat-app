import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Sidebar = () => {
  return (
    <div className=" bg-indigo-800 w-1/3 border-r-2 border-r-solid ">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
