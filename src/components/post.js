import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../src/styles/post.css";
import Movie1 from "../img/works/yugu/yugu_port.png";
import Movie2 from "../img/works/pv/pv1.png";
import Movie3 from "../img/works/maya/maya.png";
import Movie4 from "../img/works/kyushoku/kyushoku.jpg";
import Movie5 from "../img/works/tempest/tempest_port.png";
import Movie6 from "../img/works/kojin/kojin1.png";
import SEO from "./seo";
import Web1 from "../img/works/allcrean/allcrean_port.png";
import Web2 from "../img/works/my portfolio/my1.png";
import Game1 from "../img/works/Gamepr/gamepr.jpg";
import Cont1 from "../img/works/prkouza/IMG_4650.jpg";
import Cont2 from "../img/works/smhkouza/IMG_1789.png";
import { RiArrowLeftSFill } from "react-icons/ri";
// import { Player } from 'video-react';
import YouTube from "react-youtube";

const Post = () => {
  const location = useLocation();

  const srcItems1 = [
    Movie1,
    Movie2,
    Movie3,
    Movie4,
    Movie5,
    Movie6,
    Web1,
    Web2,
    Game1,
    Cont1,
    Cont2,
  ];

  const youtubeId = location.state.videoid;

  if (youtubeId === "") {
    return (
      <>
        <SEO
          title={location.state.name}
          description={`${location.state.name}の詳細ページです.`}
        />
        <div className="title"></div>
        <img
          className={location.state.name}
          src={srcItems1[location.state.imgId - 1]}
          alt=""
        />
        <p className="small">{location.state.date}</p>
        <p className="small">{location.state.loca}</p>
        <p className="ex">{location.state.longtext}</p>
        <p id="skilltitle">使用スキル</p>
        <p className="small">{location.state.skillname}</p>
        <Link to="/">
          <p class="btn-circle-stitch">
            <RiArrowLeftSFill />
          </p>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <SEO
          title={location.state.name}
          description={`${location.state.name}の詳細ページです.`}
        />
        <div className="title"></div>
        <div className="wrap">
          <YouTube
            videoId={youtubeId}
            className="iframe"
            containerClassName="youtube"
          />
        </div>
        <p className="small">{location.state.date}</p>
        <p className="small">{location.state.loca}</p>
        <p className="ex">{location.state.longtext}</p>
        <p id="skilltitle">使用スキル</p>
        <p className="small">{location.state.skillname}</p>
        <Link to="/">
          <p class="btn-circle-stitch">
            <RiArrowLeftSFill />
          </p>
        </Link>
      </>
    );
  }
};

export default Post;
