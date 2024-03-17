import React from "react";

const commentData = [
  {
    name: "Rohit",
    text: "Lorem jdo roh jonz anaoena , amet cpak ",
    repiles: [],
  },
  {
    name: "Rohit",
    text: "Lorem jdo roh jonz anaoena , amet cpak ",
    repiles: [],
  },
  {
    name: "Rohit",
    text: "Lorem jdo roh jonz anaoena , amet cpak ",
    repiles: [
      {
        name: "Rohit",
        text: "Lorem jdo roh jonz anaoena , amet cpak ",
        repiles: [
          {
            name: "Rohit",
            text: "Lorem jdo roh jonz anaoena , amet cpak ",
            repiles: [
              {
                name: "Rohit",
                text: "Lorem jdo roh jonz anaoena , amet cpak ",
                repiles: [
                  {
                    name: "Rohit",
                    text: "Lorem jdo roh jonz anaoena , amet cpak ",
                    repiles: [
                      {
                        name: "Rohit",
                        text: "Lorem jdo roh jonz anaoena , amet cpak ",
                        repiles: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rohit",
    text: "Lorem jdo roh jonz anaoena , amet cpak ",
    repiles: [],
  },
  {
    name: "Rohit",
    text: "Lorem jdo roh jonz anaoena , amet cpak ",
    repiles: [],
  },
  {
    name: "Rohit",
    text: "Lorem jdo roh jonz anaoena , amet cpak ",
    repiles: [],
  },
  {
    name: "Rohit",
    text: "Lorem jdo roh jonz anaoena , amet cpak ",
    repiles: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, repiles } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-md m-3">
      <img
        className="h-7  "
        alt="user"
        src="https://th.bing.com/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?rs=1&pid=ImgDetMain"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div  key={index}>
      <Comment data={comment} />

      <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.repiles} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 ml-10 p-2">
      <h1 className="font-bold text-3xl">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
