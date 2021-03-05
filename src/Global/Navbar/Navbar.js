//==================================//
//=====Food_Spin Version @1.0.0=====//
//=================================//

import React, { Component } from "react";
import "./Navbar.scss";
import Shop_Icon from "./img/Shop.svg";
import Menu_logo from "./img/Menu.svg";
import $ from "jquery";

//Start Functions
function OpenMenu() {
  $(".menu-slider").toggleClass("menu-open");
  $("body").toggleClass("MenuOpen");
  $(".menu-slider nav ul li").toggleClass("li-open");
}
class Navbar extends Component {
  render() {
    return (
      <div className="Main-navbar">
        <div className="logo">
          <img src="./logo.svg" alt="" />
        </div>
        <div className="links">
          <nav>
            <ul>
              <li>
                <a href="!#">Breakfast</a>
              </li>
              <li>
                <a href="!#">Lunch</a>
              </li>
              <li>
                <a href="!#">Dinner</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Shop">
          <img src={Shop_Icon} alt="Shop_Icon" />
        </div>
        <div className="Menu" onClick={OpenMenu}>
          <img src={Menu_logo} alt="" />
        </div>
      </div>
    );
  }
}
export default Navbar;
