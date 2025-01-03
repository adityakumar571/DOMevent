import React from "react";
import Button from "../Components/Button/Button";
import "./Contact.css"

function Contact() {

  const Submit=()=>{

  }
  return (
    <div className="Contact">
    <h1> Contact Us</h1>
  
    <div className="userData"> <label>Name</label>  
    <input type="text" placeholder="userName" /></div>
    <div className="userData" >      <label>Email</label>
    <input type="email" placeholder="user email" /></div>
    <div className="userData"> <label>Number</label>
    <input type="number" placeholder="Phone"  /></div>

     

      <textarea name="message" id="info" placeholder="write massage"></textarea>
      <Button name="Contact us" onClick={Submit} />

    </div>
  );
}

export default Contact;
