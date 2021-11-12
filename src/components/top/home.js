import React from "react";
import "../../styles/top_style/home.css";

const Home = () => {
  return (
    <>
      <p className="home-text">home</p>
      <picture>
        <source srcset="候補1の画像URL" 属性 />
        <source srcset="候補2の画像URL" 属性 />
        <img src="候補4の画像URL" alt="~" />
      </picture>
    </>
  );
};

export default Home;
