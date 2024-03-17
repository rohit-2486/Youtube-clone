// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { closeMenu } from "../utils/appSlice";
// import { useSearchParams } from "react-router-dom";
// import CommentContainer from "./CommentContainer";
// import LiveChat from "./LiveChat";

// const WatchPage = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(closeMenu());
//   }, []);
//   const [searchParams] = useSearchParams();
//   // console.log(searchParams.get("v"));
//   return (
//     <div className="flex flex-col w-full">
//      <div className="p-6 ml-10  mt-20 flex w-full ">
//       <div>
//       <iframe className="rounded-lg"
//         width="1000"
//         height="500"
//         src={"https://www.youtube.com/embed/" + searchParams.get("v")}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe>
//       </div>
//       <div className="w-full">
//         <LiveChat/> 
//       </div>
      
//     </div>
    
//     <CommentContainer/>
//     </div>
//   );
// };

// export default WatchPage;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchParams] = useSearchParams();

  return (
    <div className="flex flex-col w-full">
      <div className="md:p-6 md:ml-10 mt-20 pl-4  md:flex w-full ">
        <div className="w-full md:w-2/3 md:mr-4 h-[300px] md:h-full mb-2 ">
          <iframe
            className="rounded-lg w-full h-full md:h-full"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
