import React from "react";

const Chats = () => {
  return (
    <div>
      <div className="p-2.5 flex items-center gap-2.5 text-white cursor-pointer hover:bg-indigo-900">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.pexels.com/photos/14270561/pexels-photo-14270561.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
        <div className="">
          <span className="text-lg font-bold">Jane</span>
          <p className="text-sm text-cool-grey-100">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
