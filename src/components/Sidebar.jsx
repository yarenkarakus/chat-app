import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Chats from "../components/Chats";

const Sidebar = () => {
  return (
    <div className=" bg-indigo-800 w-2/5 border-r-2 border-r-solid relative ">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
