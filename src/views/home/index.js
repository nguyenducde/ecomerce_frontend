import React, { Component } from "react";
import BannerSlider from "../home/banner-carousel";
import CategorySlider from "../home/category-carousel";
// import Bestofferbanner from "./best-offers-banner";
// import Topstample from "./top-stample";

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <BannerSlider />
        <CategorySlider />

        {/* <Bestofferbanner />
        <Topstample /> */}
      </div>
    );
  }
}
