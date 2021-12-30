import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.jpeg";

//function to display 3 components of snacks and display a greeting. 
function VendingMachine() {
  return(
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}>
      <Message>
        <h2>hello i am a vending machine. what would you like to eat?</h2>
      </Message>
      <Message>
        <h1><Link to="/soda">Soda</Link></h1>
        <h1><Link to="/chips">Chips</Link></h1>
        <h1><Link to="/cookies">Cookies</Link></h1>
      </Message>
    </div>
  );
}

export default VendingMachine;