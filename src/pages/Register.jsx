import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="bg-indigo-300 h-screen flex items-center justify-center">
      <div className="bg-white py-5 px-14 rounded-lg flex flex-col gap-2.5 items-center ">
        <span className="text-indigo-800 font-bold text-2xl">Gossip Chat</span>
        <span className="text-indigo-800  text-xl">Register</span>
        <form className="flex flex-col gap-4 ">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label
            className="flex items-center gap-2.5 text-indigo-200 text-xs cursor-pointer"
            htmlFor="file"
          >
            <img className="w-8" src={Add} alt="Add" />
            <span> Add an avatar</span>
          </label>

          <button className="bg-indigo-500 text-white p-2.5 font-bold cursor-pointer rounded-lg hover:bg-indigo-400">
            Sign up
          </button>
        </form>
        <p className="text-indigo-800  text-xs mt-2.5">
          You do have an account? Login{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
