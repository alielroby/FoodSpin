//==================================//
//=====Food_Spin Version @1.0.0=====//
//=================================//

import React, { Component } from "react";
import MenuSlider from "../../Global/Menu/MenuSlider";
import Navbar from "../../Global/Navbar/Navbar";
import FoodSpin from "../FoodSpin/FoodSpin";
import "./Layout.scss";
class Layout extends Component {
  render() {
    return (
      <main className="layout">
        <div className="container-fluid">
          {/* Start My Svg */}
          <div className="svg">
            <svg>
              <circle r="50%" cx="50%" cy="50%" />
            </svg>
          </div>
          {/* Start Main Navbar */}
          <Navbar />
          {/* Start Menu Slider */}
          <MenuSlider />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6"></div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <FoodSpin />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Layout;
