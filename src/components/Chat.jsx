import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className=" w-2/3">
      <div className="h-[50px] font-bold p-2.5 bg-cool-grey-050 flex items-center justify-between">
        <span>{data.user?.displayName}</span>
        <div className="flex gap-2.5">
          <img className="icon  " src={Cam} alt="" />
          <img className="icon " src={Add} alt="" />
          <img className="icon" src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
