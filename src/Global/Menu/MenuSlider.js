//==================================//
//=====Food_Spin Version @1.0.0=====//
//=================================//

import React, { Component } from "react";
import "./MenuSlider.scss";
class MenuSlider extends Component {
  render() {
    return (
      <div className="menu-slider">
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
    );
  }
}
export default MenuSlider;
