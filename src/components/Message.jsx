import React from "react";

const Message = () => {
  return (
    <div className="message flex gap-5 mb-5 owner">
      <div className="flex flex-col text-cool-grey-300 font-light">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.pexels.com/photos/14270561/pexels-photo-14270561.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="messagecontent max-w-[80%] flex flex-col gap-2.5 items-end">
        <p className="bg-white max-w-max py-2.5 px-5 rounded-xl rounded-tl-none">
          Hello
        </p>
        <img
          className="w-2/4"
          src="https://images.pexels.com/photos/14270561/pexels-photo-14270561.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
