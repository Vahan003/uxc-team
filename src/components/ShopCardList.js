import React from "react";
import ShopCard from "../components/ShopCard";
import SmallButtonArrow from "../components/SmallButtonArrow";
import Img1 from "../images/Rectangle 8.png";
import Img2 from "../images/Rectangle 9.png";
import Img3 from "../images/Rectangle 10.png";
import Img4 from "../images/Rectangle 11.png";
import "../styles/shop-card-list.sass";
const ShopCardList = (props) => {
  return (
    <>
      <div className="shop-card-list">
        <ShopCard img={Img1} name="Sofa Francesca" price="300$" />
        <ShopCard img={Img2} name="Sofa Francesca" price="300$" />
        <ShopCard img={Img3} name="Sofa Francesca" price="300$" />
        <ShopCard img={Img4} name="Sofa Francesca" price="300$" />
        {!props.seeMoreOff && (
          <div>
            <SmallButtonArrow name="see more" />
          </div>
        )}
      </div>
    </>
  );
};

export default ShopCardList;
