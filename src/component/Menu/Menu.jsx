import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Genre from "./Genre";
import Language from "./Language";
import Book from "./Book";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import AwardWinner from "./AwardWinner";
import Feedback from "./Feedback";
import "./Menu.css"


function Menu() {
  return (
    <section id="menu">
      <div class="btn-group" role="group">
        <Home />
        <Book />
        <Genre />
        <Language />
        <BestSellers />
        <NewArrivals />
        <AwardWinner />
        <Feedback/>
      </div>
    </section>
  );
}

export default Menu;
