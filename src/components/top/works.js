import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Wr1_yugu from "../wrk/mv/post";
import { Link } from "react-router-dom";
import "../../styles/top_style/works.css";
import Movie1 from "../../img/works/yugu/yugu_port.png";
import Movie2 from "../../img/works/pv/pv1.png";
import Movie3 from "../../img/works/maya/maya.png";
import Movie4 from "../../img/works/tempest/tempest_port.png";
import Movie6 from "../../img/works/kojin/kojin1.png";
import Web1 from "../../img/works/allcrean/allcrean_port.png";
import Game1 from "../../img/works/Gamepr/gamepr.png";
import Cont1 from "../../img/works/prkouza/IMG_4669.jpg";
import Cont2 from "../../img/works/smhkouza/IMG_1789.JPG";

class Works extends React.Component {
  render() {
    const data = [
      {
        name: "Movie1",
        srcname: Movie1,
        text: "ユグドラシル",
        altname: "2019.11.9",
      },
      {
        name: "Movie2",
        srcname: Movie2,
        text: "日本聴能言語福祉学院 ",
        altname: "2020.7.4",
      },
      {
        name: "Movie3",
        srcname: Movie3,
        text: "Fish Animation",
        altname: "2020.7.22",
      },
      {
        name: "Movie1",
        srcname: Movie1,
        text: "福岡市第三給食センター",
        altname: "給食センター",
      },
      {
        name: "Movie4",
        srcname: Movie4,
        text: "The Tempest",
        altname: "2021.10.22~24",
      },
      {
        name: "Movie6",
        srcname: Movie6,
        text: "旅行に行こう",
        altname: "2021.11.10",
      },
      ,
    ];
    const data2 = [
      {
        name: "Web1",
        srcname: Web1,
        text: "ALL CLEAN HYPER",
        altname: "2021.9.10",
      },
      { name: "Web1", srcname: Web1, text: "My Portfolio", altname: "2021.9.10" },
      ,
    ];
    const data3 = [
      {
        name: "Game1",
        srcname: Game1,
        text: "ジグゾーパズル",
        altname: "2021.7.22",
      },
      ,
    ];
    const data4 = [
      {
        name: "Cont1",
        srcname: Cont1,
        text: "プログラミング教室",
        altname: "2020.12.12",
      },
      { name: "Cont2", srcname: Cont2, text: "スマホ講座", altname: "2021.4.24" },
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
                      <Link to="/post">
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
