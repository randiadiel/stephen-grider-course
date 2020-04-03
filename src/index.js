import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        content="Nice blog post!"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:45PM"
        avatar={faker.image.avatar()}
        content="I like the subject"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 1:15PM"
        avatar={faker.image.avatar()}
        content="Nice one!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
