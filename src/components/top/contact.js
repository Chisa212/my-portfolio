import React from "react";
// import {Googleform} from './googleformContact'
import "../../styles/top_style/contact.css";
import { IconContext } from "react-icons";
import { FiMail } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
// const StyledTable='styled.table';
// const TextArea = 'styled.textarea';
// const Th = 'styled.th';
// const StyledSubmit ='styled.button';

const Contact = () => {
  return (
    <>
      <div className="contactmain" id="ct">
      <h2>Contact</h2>
      <div className="conbox">
          <IconContext.Provider value={{ color: "#393665", size: "3vw" }}>
            <FiMail />
          </IconContext.Provider>
        </div>
        <div className="conbox">
        <p className="context">chisaf.212@gmail.com</p>
        </div>
   
        <div className="conbox">
      <IconContext.Provider value={{ color: "#393665", size: "4vw" }}>
        <RiGithubLine />
      </IconContext.Provider>
      </div>
      <div className="conbox">
       <p className="context">Chisa212</p>
      </div>
      </div>
      
      
      

      
    </>
  );
};

export default Contact;
