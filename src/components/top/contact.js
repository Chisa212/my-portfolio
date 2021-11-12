import React from "react";
import {Googleform} from './googleformContact'
import "../../styles/top_style/contact.css"

const Contact = () => {
  return (
    <>
       <form>
      <div className='StyledTable'>
        <tbody>
          <tr>
            <Th>
              <p>Name</p>
            </Th>
            <td>
              <div inputtype={'text'} name={'name'} />
            </td>
          </tr>
          <tr>
            <Th>
            <p>Email</p>
            </Th>
            <td> 
              <div inputtype='text'} name={'email'} />
            </td>
          </tr>
          <tr>
            <Th>
            <p>subject</p>
            </Th>
            <td> 
              <StyledInput type={'text'} name={'subject'} />
            </td>
          </tr>
        </tbody>
      </div>
      <p>お問い合わせ内容</p>
      <TextArea name={'inquiry'} />
      <StyledSubmit type={'submit'}>送信する</StyledSubmit>
    </form>
     
    </>
  )
}

export default Contact