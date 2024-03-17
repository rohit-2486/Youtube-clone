import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SERACH_API } from "../utils/constant";
import { CacheResults } from "../utils/searchSlice";
// import { json } from "react-router-dom";
// import { clear } from "@testing-library/user-event/dist/clear";

const Head = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    // console.log(searchText);
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestion(searchCache[searchText]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchText]);

  // const getSearchSuggestion = async () => {

  //   const data = await fetch(YOUTUBE_SERACH_API + searchText);
  //   const json = await data.json();
  //   setSuggestion(json[1]);
  //   dispatch(
  //     CacheResults({
  //       [searchText]: json[1],
  //     })
  //   );
  // };

  const getSearchSuggestion = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.org/?" +
          encodeURIComponent(YOUTUBE_SERACH_API + searchText)
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setSuggestion(data[1]);

      // Update cache
      dispatch(
        CacheResults({
          [searchText]: data[1],
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error here, such as showing a message to the user
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="fixed w-full  top-0 bg-white shadow-lg z-50 ">
      <div className=" grid grid-flow-col p-2  ">
        <div className="flex col-span-5 md:col-span-2">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-6 md:m-0 mr-1 md:h-7 cursor-pointer"
            alt="hamburger "
            src="https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-21.jpg"
          />
          <a href="/">
            <img
              className={`md:h-7  h-7 p-1 md:mx-2 `}
              alt="youtube logo "
              src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            />
          </a>
        </div>
        <div className="md:col-span-9 col-span-7  md:mx-24  ">
          <div>
            <input
              className="md:w-8/12 w-[60%] border border-gray-500 p-1 md:p-2 rounded-l-full "
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className=" border border-gray-500 p-1 md:p-2 rounded-r-full   md:h-11">
              Search
            </button>
          </div>
          {/** {showSuggestion && (
            <div className="fixed bg-white p-2 my-2 mx-5 w-[36.666667%] shadow-lg rounded-lg border">
              <ul className="">
                {suggestion.map((s) => (
                  <li key={s} className="py-2 shadow-sm hover:bg-gray-100 ">
                    🔎 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}  */}

          {showSuggestion && (
            <div className="fixed bg-white p-2 my-2 mx-5 w-[36.666667%] shadow-lg rounded-lg border">
              <ul className="">
                {Array.isArray(suggestion) &&
                  suggestion.map((s) => (
                    <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                      🔎 {s}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1 hidden md:block">
          <img
            className="h-7"
            alt="user"
            src="https://th.bing.com/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?rs=1&pid=ImgDetMain"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
