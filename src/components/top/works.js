import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../../styles/top_style/works.css";
import Movie1 from "../../img/works/yugu/yugu_port.png";
import Movie2 from "../../img/works/pv/pv1.png";
import Movie3 from "../../img/works/maya/maya.png";
import Movie4 from"../../img/works/kyushoku/kyushoku.png";
import Movie5 from "../../img/works/tempest/tempest_port.png";
import Movie6 from "../../img/works/kojin/kojin1.png";
import Web1 from "../../img/works/allcrean/allcrean_port.png";
import Web2 from"../../img/works/my portfolio/my1.png"
import Game1 from "../../img/works/Gamepr/gamepr.jpg";
import Cont1 from "../../img/works/prkouza/IMG_4650.jpg";
// import Cont2 from "../../img/works/smhkouza/IMG_1789.jpg";

class Works extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imgId: "",
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
      id: 1,
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
        id: 2,
        name: "movie2",
        srcname: Movie2,
        text: "日本聴能言語福祉学院 ",
        altname: "2020.7.4",
        longtext:"専門学校日本聴能言語福祉学院聴能言語学科の紹介PVを制作しました。映像素材が写真のみだったのでどのように動画にしていくか試行錯誤しながら学生生活の楽しさと学科の説明をわかりやすくしました。",
        iconimg:"", 
  　　　　skillname:"Aftereffects,Illustarator,Photoshop",
      },
      {
        id: 3,
        name: "movie3",
        srcname: Movie3,
        text: "Fish Animation",
        altname: "2020.7.22",
        longtext:"魚の動きやカメラを音楽に合わせ制作しました。モデリング,テクスチャ,編集といろんな技術を学ぶことができました。",
        iconimg:"", 
  　　　　skillname:"MAYA,Aftereffects,Photoshop",
      },
      {
        id: 4,
        name: "movie4",
        srcname: Movie4,
        text: "福岡市第三給食センター",
        altname: "2021.3.20",
        longtext:"給食センター内で上映される施設紹介映像を制作しました。",
        iconimg:"", 
  　　　　skillname:"MAYA,Aftereffects,Photoshop",
      },
      {
        id: 5,
        name: "movie5",
        srcname: Movie5,
        text: "The Tempest",
        altname: "2021.10.22~24",
        loca:"名古屋市青少年文化センター　アートピアホール",
      longtext:"演者とプロジェクションマッピングの公演の映像を制作しました。 台本を元にデザイン、映像の動きを考え、舞台の内容が観客によりわかりやすく伝わることを一番に心がけた。",
      iconimg:"", 
      skillname:"Aftereffects,Illustarator,Photoshop",
      },
      {
        id: 6,
        name: "movie6",
        srcname: Movie6,
        text: "旅行に行こう",
        altname: "2021.11.10",
        longtext:" コロナ禍で旅行に行けないことからあまり知られていない観光地を紹介した映像を制作した。画像などを使わずに全てイラストで表現した。",
        iconimg:"", 
        skillname:"Aftereffects,Illustarator,Photoshop",
      },
    ];
    const data2 = [
      {
        id:7,
        name: "web1",
        srcname: Web1,
        text: "ALL CLEAN HYPER",
        altname: "2021.9.10",
        longtext:"個人より企業が見るホームページである為、シンプルで商品の具体性がわかるデザインになっている。",
        iconimg:"", 
        skillname:"Dreamweaver,HTML,css,Javascript,Illustarator,Photoshop",
      },
      { 
        id:8,
        name: "web2",
       srcname: Web2,
        text: "My Portfolio",
         altname: "2021.11.30",
         longtext:"自分の個性を出すデザインかつわかりやすく見やすさを心がけた。",
         iconimg:"", 
         skillname:"HTML,css,Javascript,React,Illustarator,Photoshop",
       },
    ];
    const data3 = [
      {
        id:9,
        name: "game1",
        srcname: Game1,
        text: "ジグゾーパズル",
        altname: "2021.7.22",
        longtext:"Unityで幼児向けのジグゾーパズルを制作した。",
        iconimg:"", 
        skillname:"Unity,Illustarator,Photoshop",
      },
    ];
    const data4 = [
      { id:10,
        name: "cont1",
        srcname: Cont1,
        text: "プログラミング教室",
        altname: "2020.12.12",
        longtext:"中学校でのプログラミングの授業が必修化されました。小学校高学年、保護者の為のプログラミング講座に参加し、受講者と1対1で丁寧に教えた。",
        iconimg:"", 
        skillname:"Python",
      },
      { id:11,
        name: "cont2",
       srcname: Cont1,
        text: "スマホ講座",
         altname: "2021.4.24",
         longtext:"スマホについて、不安や難しさを感じる初心者向けの講座。自分の好みの設定や一歩進んだに役立つスマホの使い方、困った時の対処法などを丁寧に教えます。",
        iconimg:"", 
        skillname:"コミュニケーション力",
         },
    ];
    
    return (
      <>
        <div id="wr">
          <h2>Works</h2>
          <p className="komidashi">movie</p>
          <div class="wrap">
            <div class="item">
              {
                <ul className="card">
                  {data.map((value) => (
                    <li>
                      <Link to={{pathname: '/post' , state: { name: value.text ,date: value.altname, imgId: value.id, loca:value.loca,longtext:value.longtext,skillname:value.skillname}}}  >
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
  
          <p className="komidashi">Web</p>
          <div class="wrap">
            <div class="item">
              {
                <ul className="card">
                  {data2.map((value) => (
                    <li>
                     <Link to={{pathname: '/post' , state: { name: value.text ,date: value.altname, imgId: value.id, loca:value.loca,longtext:value.longtext,skillname:value.skillname}}}  >
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
  
          <h3>Game</h3>
          <div class="wrap">
            <div class="item">
              {
                <ul className="card">
                  {data3.map((value) => (
                    <li>
                    <Link to={{pathname: '/post' , state: { name: value.text ,date: value.altname, imgId: value.id, loca:value.loca,longtext:value.longtext,skillname:value.skillname}}}  >

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
  
          <h3>Contribution to the community</h3>
          <div class="wrap">
            <div class="item">
              {
                <ul className="card">
                  {data4.map((value) => (
                    <li>
                    <Link to={{pathname: '/post' , state: { name: value.text ,date: value.altname, imgId: value.id, loca:value.loca,longtext:value.longtext,skillname:value.skillname}}}  >

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
        </div>
      </>
    );
  };
}

export default withRouter(Works);
