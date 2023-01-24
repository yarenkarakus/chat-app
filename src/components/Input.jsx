import React from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className="h-[50px] bg-white p-2.5 flex items-center justify-between">
      <input
        className="grow border-none outline-none text-lg placeholder:text-cool-grey-200"
        type="text"
        placeholder="Type something..."
      />
      <div className="flex items-center gap-2.5">
        <img className="h-6 cursor-pointer" src={Attach} alt="" />
        <input
          className="w-full border-none outline-none"
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
          <img className="h-6 cursor-pointer" src={Img} alt="" />
        </label>
        <button className="shadow-lg border-none py-2.5 px-3.5 text-white bg-indigo-400 rounded-xl">
          Send
        </button>
      </div>
    </div>
  );
};
export default Input;
