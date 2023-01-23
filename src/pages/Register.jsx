import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="bg-cool-grey-050  py-5 px-14 rounded-xl flex flex-col gap-2.5 items-center ">
        <h1 className="  font-bold text-2xl">Gossip Chat</h1>
        <h3 className="  text-xl">Register</h3>
        <form className="flex flex-col gap-4 ">
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <input
            className="input"
            style={{ display: "none" }}
            type="file"
            id="file"
          />
          <label
            className="flex items-center gap-2.5  text-xs cursor-pointer"
            htmlFor="file"
          >
            <img className="w-10" src={Add} alt="Add" />
            <span> Add an avatar</span>
          </label>

          <button className="bg-indigo-600 flex items-center justify-center gap-1 text-white p-2.5 font-bold cursor-pointer rounded-lg hover:bg-indigo-400 ">
            <div className="w-4 h-4 border-b-2 border-b-white animate-spin rounded-full"></div>
            Sign up
          </button>
        </form>

        <p className=" text-xs mt-2.5">You do have an account? Login </p>
      </div>
    </div>
  );
};

export default Register;
