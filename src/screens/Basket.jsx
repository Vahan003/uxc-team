import React, { useEffect, useState } from "react";
import BasketCardList from "../components/BasketCardList";
import CreditCard from "../components/CreditCard";
import Img from "../images/Rectangle 8.png";
import "../styles/screens.sass";
const Basket = () => {
  return (
    <div className="screen">
        <BasketCardList img={Img} />
        <CreditCard
          name={"Sofa Francesca"}
          price={"300$"}
        />
    </div>
  );
};

export default Basket;
