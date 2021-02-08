import React from "react";
import Card from "./Card";
import Img1 from "../images/Rectangle 4.png";
import Img2 from "../images/Rectangle 5.png";
import Img3 from "../images/Rectangle 6.png";
import Img4 from "../images/Rectangle 7.png";
import "../styles/category.sass";
const Category = () => {
  return (
    <div className="category">
      <div>
        <Card img={Img1} name="Living Room" />
        <Card img={Img2} name="Kitchen" />
      </div>
      <div>
        <Card img={Img4} name="Bedroom" />
        <Card img={Img3} name="Bathroom" />
      </div>
    </div>
  );
};

export default Category;
