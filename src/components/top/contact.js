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
      <h2>Contact</h2>
      
        <div className="conbox">
          <IconContext.Provider value={{ color: "#393665", size: "3vw" }}>
            <FiMail />
          </IconContext.Provider>
        </div>
        <div className="conbox">
        <p className="context">chese2001@gmail.com</p>
        </div>
   
        <div className="conbox">
      <IconContext.Provider value={{ color: "#393665", size: "4vw" }}>
        <RiGithubLine />
      </IconContext.Provider>
      </div>
      <div className="conbox">
       <p className="context">Chisa212</p>
      </div>

      {/* <form>
        <label>
          Name:
          <input type="text" name="Name" />
        </label>
        <label>
        Email:
          <input type="text" name="Email" />
        </label>
        <label>
        Subject:
          <input type="text" name="Subject" />
        </label>
        <label>
        Messages:
          <input type="text area" name="Messages" />
        </label>
        <input type="submit" value="送信" />
      </form> */}
    </>
  );
};

export default Contact;
