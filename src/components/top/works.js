import React from "react";
import "../../styles/top_style/works.css";
import Movie1 from "../../img/works/yugu/yugu_port.png";
import Movie2 from "../../img/works/pv/pv1.png";
import Movie3 from "../../img/works/maya/maya.png";
import Movie4 from "../../img/works/tempest/tempest_port.png";
import Movie6 from "../../img/works/kojin/kojin1.png";
import Web1 from "../../img/works/allcrean/allcrean_port.png";
import Game1 from"../../img/works/Gamepr/gamepr.png";
import Cont1 from"../../img/works/prkouza/IMG_4669.jpg";
import Cont2 from "../../img/works/smhkouza/IMG_1789.JPG"
const Works = () => {
  const data = [
    { name: "Movie1", srcname: Movie1, altname: "2019.11.9" },
    { name: "Movie2", srcname: Movie2, altname: "2020.7.4" },
    { name: "Movie3", srcname: Movie3, altname: "2020.7.22" },
    { name: "Movie1", srcname: Movie1, altname: "給食センター" },
    { name: "Movie4", srcname: Movie4, altname: "2021.10.22~24" },
    { name: "Movie6", srcname: Movie6, altname: "2021.11.10" },
    ,
  ];
  const data2 = [
    { name: "Web1", srcname: Web1, altname: "2021.9.10" },
    { name: "Web1", srcname: Web1, altname: "2021.9.10"},
    ,
  ];
  const data3 = [
    { name: "Game1", srcname:Game1, altname: "2021.7.22" },
   
    ,
  ];
  const data4 = [
    { name: "Cont1", srcname: Cont1, altname: "2020.12.12" },
    { name: "Cont2", srcname: Cont2, altname: "2021.4.24"},
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
                  <img
                    className={value.name}
                    src={value.srcname}
                    alt={value.altname}
                  />
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
                    <img
                      className={value.name}
                      src={value.srcname}
                      alt={value.altname}
                    />
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
                    <img
                      className={value.name}
                      src={value.srcname}
                      alt={value.altname}
                    />
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
                    <img
                      className={value.name}
                      src={value.srcname}
                      alt={value.altname}
                    />
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

export default Works;
