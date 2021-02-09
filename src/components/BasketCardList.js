import React from 'react';
import BasketCard from './BasketCard';
import Img1 from '../images/Rectangle 8.png'
import Img2 from '../images/Rectangle 9.png'
import '../styles/basket-card-list.sass'
const BasketCardList = (props) => {
 return (
     <div className="basket-card-list">
         <BasketCard img={Img1} name ={"Sofa Francesca"} price = {"300$"} setChange={props.setChange}/>
         <BasketCard img={Img2} name ={"Sofa Francesca"} price = {"300$"} setChange={props.setChange}/>
     </div>
 );

}

export default BasketCardList;