import React from "react";
import "../../styles/top_style/skill.css";
import { IconContext } from "react-icons";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobelightroom } from "react-icons/si";
import { SiAdobedreamweaver } from "react-icons/si";

const Skill = () => {
  return (
    <>
      <div className="SkillMain">
        <p>Skill</p>
        <div className="adb1">
          <IconContext.Provider value={{ color: "#393665", size: "5vw" }}>
            <SiAdobeaftereffects />
          </IconContext.Provider>
        </div>
        <div className="adb2">
          <IconContext.Provider value={{ color: "#393665", size: "5vw" }}>
            <SiAdobepremierepro />
          </IconContext.Provider>
        </div>
        <div className="adb3">
          <IconContext.Provider value={{ color: "#330000", size: "5vw" }}>
            <SiAdobeillustrator />
          </IconContext.Provider>
        </div>
        <div className="adb4">
          <IconContext.Provider value={{ color: "#001E36  ", size: "5vw" }}>
            <SiAdobephotoshop />
          </IconContext.Provider>
        </div>
        <div className="adb5">
          <IconContext.Provider value={{ color: "#001E36  ", size: "5vw" }}>
            <SiAdobelightroom />
          </IconContext.Provider>
        </div>
        <div className="adb6">
          <IconContext.Provider value={{ color: "#470137", size: "5vw" }}>
            <SiAdobedreamweaver />
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Skill;
