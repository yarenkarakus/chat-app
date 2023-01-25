import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="bg-cool-grey-100 p-2.5 h-[calc(100%-100px)] overflow-y-scroll scrool-cool-grey-050 ">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
