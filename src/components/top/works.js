import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Wr1_yugu from "../post";
import { Link } from "react-router-dom";
import "../../styles/top_style/works.css";
import Movie1 from "../../img/works/yugu/yugu_port.png";
import Movie2 from "../../img/works/pv/pv1.png";
import Movie3 from "../../img/works/maya/maya.png";
import Movie5 from "../../img/works/tempest/tempest_port.png";
import Movie6 from "../../img/works/kojin/kojin1.png";
import Web1 from "../../img/works/allcrean/allcrean_port.png";
import Game1 from "../../img/works/Gamepr/gamepr.png";
import Cont1 from "../../img/works/prkouza/IMG_4669.jpg";
import Cont2 from "../../img/works/smhkouza/IMG_1789.JPG";

class Works extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      date: "",
      loca:"",
      longtext:"",
      iconimg:"",
      skillname:"",
      link:"",
      
    };
  }

  render() {
    const data = [
      {
      name: "movie1",
      srcname: Movie1,
      text: "ユグドラシル",
      altname: "2019.11.9",
      loca:"長久手文化の家、森のホール",
      longtext:"ダンスとプロジェクションマッピングの公演「ユグドラシル」のオープニング映像を制作しました。 公演名であるユグドラシルを主体とした独創的な世界を繰り広げ、 暗闇にでも映えるモノクロカラーにしました。",
      iconimg:"", 
      skillname:"Aftereffects,Illustarator,Photoshop",
      
      },
      {
        name: "movie2",
        srcname: Movie2,
        text: "日本聴能言語福祉学院 ",
        altname: "2020.7.4",
        longtext:"専門学校日本聴能言語福祉学院聴能言語学科の紹介PVを制作しました。映像素材が写真のみだったのでどのように動画にしていくか試行錯誤しながら学生生活の楽しさと学科の説明をわかりやすくしました。",
        iconimg:"", 
  　　　　skillname:"Aftereffects,Illustarator,Photoshop",
      },
      {
        name: "movie3",
        srcname: Movie3,
        text: "Fish Animation",
        altname: "2020.7.22",
        longtext:"魚の動きやカメラを音楽に合わせ制作しました。モデリング,テクスチャ,編集といろんな技術を学ぶことができました。",
        iconimg:"", 
  　　　　skillname:"MAYA,Aftereffects,Photoshop",
      },
      {
        name: "movie4",
        srcname: Movie1,
        text: "福岡市第三給食センター",
        altname: "2021.3.20",
        longtext:"給食センター内で上映される施設紹介映像を制作しました。",
        iconimg:"", 
  　　　　skillname:"MAYA,Aftereffects,Photoshop",
      },
      {
        name: "movie5",
        srcname: Movie5,
        text: "The Tempest",
        altname: "2021.10.22~24",
        loca:"名古屋市青少年文化センター　アートピアホール",
      longtext:"演者とプロジェクションマッピングの公演の映像を制作しました。 台本をもとにざさ",
      iconimg:"", 
      skillname:"Aftereffects,Illustarator,Photoshop",
      },
      {
        name: "movie6",
        srcname: Movie6,
        text: "旅行に行こう",
        altname: "2021.11.10",
      },
      ,
    ];
    const data2 = [
      {
        name: "web1",
        srcname: Web1,
        text: "ALL CLEAN HYPER",
        altname: "2021.9.10",
      },
      { name: "web2", srcname: Web1, text: "My Portfolio", altname: "2021.9.10" },
      ,
    ];
    const data3 = [
      {
        name: "game1",
        srcname: Game1,
        text: "ジグゾーパズル",
        altname: "2021.7.22",
      },
      ,
    ];
    const data4 = [
      {
        name: "cont1",
        srcname: Cont1,
        text: "プログラミング教室",
        altname: "2020.12.12",
      },
      { name: "cont2", srcname: Cont2, text: "スマホ講座", altname: "2021.4.24" },
      ,
    ];
    return (
      <>
        <div id="wr">
          <p>works</p>
          <p>movie</p>
          <div class="wrap">
            <div class="item">
              {
                <ul className="card">
                  {data.map((value) => (
                    <li>
                      <Link to={{pathname: '/post' , state: { name: value.text ,date: value.altname,img:value.srcname, loca:value.loca,longtext:value.longtext,skillname:value.skillname}}}  >
                        <div className="hover">
                          <div className="hover-img">
                            <img
                              className={value.name}
                              src={value.srcname}
                              alt={value.altname}
                            />
                          </div>
                          <div class="hover-text">
                            <p class="text1">{value.text}</p>
                          </div>
                        </div>
                      </Link>
                      <p>{value.altname}</p>
                    </li>
                  ))}
                </ul>
              }
              {/* <img className="Movie1" src={Movie1} alt="yugu"/> */}
            </div>
          </div>
  
          <p>Web</p>
          <div class="wrap">
            <div class="item">
              {
                <ul className="card">
                  {data2.map((value) => (
                    <li>
                      <div className="hover">
                        <div className="hover-img">
                          <img
                            className={value.name}
                            src={value.srcname}
                            alt={value.altname}
                          />
                        </div>
                        <div class="hover-text">
                          <p class="text1">{value.text}</p>
                        </div>
                      </div>
  
                      <p>{value.altname}</p>
                    </li>
                  ))}
                </ul>
              }
              {/* <img className="Movie1" src={Movie1} alt="yugu"/> */}
            </div>
          </div>
  
          <p>Game</p>
          <div class="wrap">
            <div class="item">
              {
                <ul className="card">
                  {data3.map((value) => (
                    <li>
                      <div className="hover">
                        <div className="hover-img">
                          <img
                            className={value.name}
                            src={value.srcname}
                            alt={value.altname}
                          />
                        </div>
                        <div class="hover-text">
                          <p class="text1">{value.text}</p>
                        </div>
                      </div>
  
                      <p>{value.altname}</p>
                    </li>
                  ))}
                </ul>
              }
              {/* <img className="Movie1" src={Movie1} alt="yugu"/> */}
            </div>
          </div>
  
          <p>Contribution to the community</p>
          <div class="wrap">
            <div class="item">
              {
                <ul className="card">
                  {data4.map((value) => (
                    <li>
                      <div className="hover">
                        <div className="hover-img">
                          <img
                            className={value.name}
                            src={value.srcname}
                            alt={value.altname}
                          />
                        </div>
                        <div class="hover-text">
                          <p class="text1">{value.text}</p>
                        </div>
                      </div>
  
                      <p>{value.altname}</p>
                    </li>
                  ))}
                </ul>
              }
              {/* <img className="Movie1" src={Movie1} alt="yugu"/> */}
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default withRouter(Works);
