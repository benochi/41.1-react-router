import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

//From each snack component, you should be able to go back to the main VendingMachine component.
function Cookies (){
  return (
    <div className="Cookies">
      <Message>
        <h1>Here are your cookies!</h1>
        <h1> 
          <Link to="/">go back</Link>
        </h1>
      </Message>
    </div>
  )
}

export default Cookies;