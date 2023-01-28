import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="flex flex-col text-cool-grey-300 font-light">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="messagecontent max-w-[80%] flex flex-col gap-2.5 items-end">
        <p className="bg-white max-w-max py-2.5 px-5 rounded-xl rounded-tl-none">
          {message.text}
        </p>
        {message.img && <img className="w-2/4" src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
