import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p></p>
      <Link to="/">
        <button>戻る</button>
      </Link>
    </>
  );
};

export default Post;
