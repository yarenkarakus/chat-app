import React from "react";

const Register = () => {
  return (
    <div className="bg-indigo-300 h-screen flex items-center justify-center">
      <div className="bg-white py-5 px-14 rounded-lg flex flex-col gap-2.5">
        <span>Lama Chat</span>
        <span>Register</span>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" />
          <button className="bg-gray-100">Sign up</button>
        </form>
        <p>You do have an account? Login </p>
      </div>
    </div>
  );
};

export default Register;
