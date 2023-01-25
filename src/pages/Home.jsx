import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className=" h-screen  flex items-center justify-center">
      <div className="border-2  border-solid overflow-hidden border-white rounded-xl w-3/5 h-4/5 flex ">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
