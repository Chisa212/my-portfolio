import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "../../src/styles/post.css"
import Movie1 from "../img/works/yugu/yugu_port.png";
import Movie2 from "../img/works/pv/pv1.png";
import Movie3 from "../img/works/maya/maya.png";
import Movie5 from "../img/works/tempest/tempest_port.png";
import Movie6 from "../img/works/kojin/kojin1.png";
import Web1 from "../img/works/allcrean/allcrean_port.png";
import Game1 from "../img/works/Gamepr/gamepr.png";
import Cont1 from "../img/works/prkouza/IMG_4669.jpg";
import Cont2 from "../img/works/smhkouza/IMG_1789.JPG";


const Post = () => {
  const location = useLocation();
  return (
    <>
      <div className="title">
      <h1>{(location.state.name)}</h1>
      </div>
       <img src={(location.state.srcname)}/>
       <p　className="small">{(location.state.date)}</p>
       <p>{(location.state.loca)}</p>
       <p className="ex">{(location.state.longtext)}</p>
       <p id="skilltitle">使用スキル</p>
       <img src={(location.state.iconimg)}/>
       <p>{(location.state.skillname)}</p>
  

      <Link to="/">
        <button>戻る</button>
      </Link>
    </>
  );
};

export default Post;
