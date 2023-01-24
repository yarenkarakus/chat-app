import React from "react";

const Login = () => {
  return (
    <div className="  h-screen flex items-center justify-center">
      <div className="bg-cool-grey-050 py-5 px-14 rounded-lg flex flex-col gap-2.5 items-center ">
        <h1 className=" font-bold text-2xl">Gossip Chat</h1>
        <h3 className="  text-xl">Login</h3>
        <form className="flex flex-col gap-4 ">
          <input className="input" type="email" placeholder="email" />
          <input className="input" type="password" placeholder="password" />
          <button className="bg-indigo-600 text-white p-2.5 font-bold cursor-pointer rounded-lg hover:bg-indigo-400">
            Sign in
          </button>
        </form>
        <p className=" text-xs mt-2.5">You don't have an account? Register </p>
      </div>
    </div>
  );
};

export default Login;
