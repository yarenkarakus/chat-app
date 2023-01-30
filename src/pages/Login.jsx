import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="bg-cool-grey-050 py-5 px-14 rounded-lg flex flex-col gap-2.5 items-center ">
        <h1 className="font-bold text-2xl">Gossip Chat</h1>
        <h3 className="text-xl">Login</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input className="loginput" type="email" placeholder="email" />
          <input className="loginput" type="password" placeholder="password" />
          <button className="bg-indigo-600 text-white p-2.5 font-bold cursor-pointer rounded-lg hover:bg-indigo-500">
            Sign in
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className=" text-xs mt-2.5">
          You don't have an account?{" "}
          <Link className="text-indigo-400" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
