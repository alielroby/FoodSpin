//==================================//
//=====Food_Spin Version @1.0.0=====//
//=================================//

import React, { Component } from "react";
import "./FoodSpin.scss";
import $ from "jquery";
import arrow from "./img/arrow.svg";

//Get My Food Data From Json File
const FoodData = require("./foodData.json");
const Foods = FoodData.map((item, key) => {
  return (
    <div className={"food item" + (key + 1)} key={key}>
      <img src={"./FoodImg/" + item.img + ".png"} alt="" />
    </div>
  );
});

//Start My Functions
var deg = 0;

// Function For Back Spinner
function Back() {
  deg -= 43;
  $(".FoodSpin .spin").css("transform", "rotate(" + deg + "deg) scale(0.9)");
  setTimeout(function () {
    $(".FoodSpin .spin").css("transform", "rotate(" + deg + "deg)");
  }, 250);
  $(".svg").toggleClass("svgSecond");
  $(".controls .back").toggleClass("SecondColor");
  $(".controls .next").toggleClass("SecondColor");
}

// Function For Next Spinner
function Next() {
  deg += 43;
  $(".FoodSpin .spin").css("transform", "rotate(" + deg + "deg) scale(0.9)");
  setTimeout(function () {
    $(".FoodSpin .spin").css("transform", "rotate(" + deg + "deg)");
  }, 250);
  $(".svg").toggleClass("svgSecond");
  $(".controls .back").toggleClass("SecondColor");
  $(".controls .next").toggleClass("SecondColor");
}

class FoodSpin extends Component {
  render() {
    return (
      <>
        <div className="FoodSpin">
          <div className="spin">{Foods}</div>
        </div>
        <div className="controls">
          <div className="back" onClick={Back}>
            <img src={arrow} />
          </div>
          <div className="next" onClick={Next}>
            <img src={arrow} />
          </div>
        </div>
      </>
    );
  }
}
export default FoodSpin;
