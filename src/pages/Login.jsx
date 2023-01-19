import React from "react";

const Login = () => {
  return (
    <div className="bg-indigo-300 h-screen flex items-center justify-center">
      <div className="bg-white py-5 px-14 rounded-lg flex flex-col gap-2.5 items-center ">
        <span className="text-indigo-800 font-bold text-2xl">Gossip Chat</span>
        <span className="text-indigo-800  text-xl">Login</span>
        <form className="flex flex-col gap-4 ">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="bg-indigo-500 text-white p-2.5 font-bold cursor-pointer rounded-lg hover:bg-indigo-400">
            Sign in
          </button>
        </form>
        <p className="text-indigo-800  text-xs mt-2.5">
          You don't have an account? Register{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
