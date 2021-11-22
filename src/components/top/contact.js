import React from "react";
// import {Googleform} from './googleformContact'
import "../../styles/top_style/contact.css";

// const StyledTable='styled.table';
// const TextArea = 'styled.textarea';
// const Th = 'styled.th';
// const StyledSubmit ='styled.button';

const Contact = () => {
  return (
    <>
      <form>
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
      </form>
    </>
  );
};

export default Contact;
