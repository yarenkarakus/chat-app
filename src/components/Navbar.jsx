import React from "react";

const Navbar = () => {
  return (
    <div className="text-white flex items-center bg-indigo-900 h-12 p-2.5 justify-between">
      <span className="font-bold">Gossip Chat</span>
      <div className="flex gap-2.5">
        <img
          src="https://images.pexels.com/photos/14270561/pexels-photo-14270561.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
          className="bg-cool-grey-050 h-6 w-6 rounded-full object-cover "
        />
        <span>John</span>
        <button className="bg-orange-vivid-500 text-white text-xs border-none cursor-pointer">
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
