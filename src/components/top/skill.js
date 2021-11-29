import React from "react";
import "../../styles/top_style/skill.css";
import { IconContext } from "react-icons";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobedreamweaver } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiUnity } from "react-icons/si";
import Cgengo from "../../img/skill/C1.png";
import Maya from "../../img/skill/M.png";
// import{DiCss3}from "react-icons/di";

const Skill = () => {
  return (
    <>
      <div className="SkillMain" id="sl">
        <h2>Skill</h2>
        <div class="box" id="makeImg">
          <div className="skilltext">
            <div className="adb1">
              <IconContext.Provider value={{ color: "#393665", size: "5vw" }}>
                <SiAdobeaftereffects />
              </IconContext.Provider>
            </div>
            <p className="skillname">After effects</p>
          </div>
          <div className="skilltext">
            <div className="adb2">
              <IconContext.Provider value={{ color: "#330000", size: "5vw" }}>
                <SiAdobeillustrator />
              </IconContext.Provider>
            </div>
            <p className="skillname">Illustlater</p>
          </div>
          <div className="skilltext">
            <div className="adb3">
              <IconContext.Provider value={{ color: "#001E36  ", size: "5vw" }}>
                <SiAdobephotoshop />
              </IconContext.Provider>
            </div>
            <p className="skillname">Photoshop</p>
          </div>

          <div className="skilltext">
            <div className="adb4">
              <IconContext.Provider value={{ color: "#470137", size: "5vw" }}>
                <SiAdobedreamweaver />
              </IconContext.Provider>
            </div>
            <p className="skillname">Dreamweaver</p>
          </div>
          <div className="skilltext">
            <div className="adb5">
              <IconContext.Provider value={{ color: "#001E36  ", size: "5vw" }}>
                <SiUnity />
              </IconContext.Provider>
            </div>
            <p className="skillname">Unity</p>
          </div>

          <div className="skilltext">
            <div className="adb6">
              <img className="Maya" src={Maya} alt="" />
            </div>
            <p className="skillname">Maya</p>
          </div>
        </div>

        <div class="box" id="makeImg">
          <div className="skilltext">
            <div className="pr1">
              <IconContext.Provider value={{ color: "#393665", size: "5vw" }}>
                <AiFillHtml5 />
              </IconContext.Provider>
            </div>
            <p className="skillname">HTML5</p>
          </div>

          <div className="skilltext">
            <div className="pr2">
              <IconContext.Provider value={{ color: "#393665", size: "5vw" }}>
                <DiCss3 />
              </IconContext.Provider>
            </div>
            <p className="skillname">css3</p>
          </div>

          <div className="skilltext">
            <div className="pr3">
              <IconContext.Provider value={{ color: "#330000", size: "5vw" }}>
                <SiJavascript />
              </IconContext.Provider>
            </div>
            <p className="skillname">Javascript</p>
          </div>

          <div className="skilltext">
            <div className="pr4">
              <IconContext.Provider value={{ color: "#001E36  ", size: "5vw" }}>
                <IoLogoReact />
              </IconContext.Provider>
             
            </div>
            <p className="skillname">React</p>
          </div>

          <div className="skilltext">
            <div className="pr5">
              <img className="Cgengo" src={Cgengo} alt="" />
            </div>
            <p className="skillname">C言語</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
