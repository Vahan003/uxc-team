import React from 'react';
import '../styles/basket-card.sass'
const BasketCard = (props) => {
 return (
     <div className="basket-card">
        <img className = "basket-card-image" src = {props.img}  alt = {props.name ?? "Buy"}/>
        <div className="card-data">
            <span className="name">{props.name ?? "Buy"}</span>
            <span className="price">{props.price ?? "-$"}</span>
            <div className="buy-button" onClick={()=>{props.setChange && props.setChange(true)}}>
                <span>Buy Now</span>
            </div>
        </div>
     </div>
 );

}

export default BasketCard;