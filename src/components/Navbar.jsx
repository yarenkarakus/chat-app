import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="text-white flex items-center bg-indigo-900 h-12 p-2.5 justify-between">
      <span className="font-bold gossip">Gossip Chat</span>
      <div className="flex gap-2.5">
        <img
          src={currentUser.photoURL}
          alt=""
          className="bg-cool-grey-050 h-6 w-6 rounded-full object-cover "
        />
        <span>{currentUser.displayName}</span>
        <button
          className="bg-orange-vivid-700 p-1 rounded-xl text-white text-xs border-none cursor-pointer"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
