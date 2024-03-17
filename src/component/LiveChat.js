import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomNames from "../utils/helper";

const LiveChat = () => {
  const [liveMessages, setLiveMessages] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => { 

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: "hi there is frontend developer",
        })
      );
    }, 4000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" md:mx-4 md:p-2 border border-black md:w-full h-[300px] md:h-[500px] bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="md:ml-4 mt-1 md:pl-4 w-full border border-black rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
                name: "Rohit ",
                message: liveMessages,
            })
          )
          setLiveMessages("");

        }}
      >
        <input
          className="md:w-80 m-2 p-2 md:h-10"
          placeholder="Live chat"
          type="text"
          value={liveMessages}
          onChange={(e) => {
            setLiveMessages(e.target.value);
          }}
        ></input>
        <button type="submit" className=" md:p-2 md:m-2 bg-green-100">send</button>
      </form>
    </>
  );
};

export default LiveChat;
