import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import sodaImg from "./Soda.jpeg";
import "./Soda.css";

//From each snack component, you should be able to go back to the main VendingMachine component.
function Soda (){
  return (
    <div className="Soda">
      <img src={sodaImg} alt="soda" />
      <Message>
        <h1>Here is your soda!</h1>
        <h1> 
          <Link to="/">go back</Link>
        </h1>
      </Message>
    </div>
  )
}

export default Soda;