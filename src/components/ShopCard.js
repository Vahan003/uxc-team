import React from 'react';
import {ReactComponent as MarketSmallSvg} from './icon/market-small.svg'
import '../styles/shop-card.sass'
const ShopCard = (props) => {
 return (
     <div className="shop-card">
         <div className="card-data-top"></div>
        <img className = "shop-card-image" src = {props.img}  alt = {props.name ?? "Go"}/>
        <div className="card-data">
            <span className="name">{props.name ?? "Go"}</span>
            <span className="price">{props.price ?? "-$"}</span>
            <div className="add-button">
                <MarketSmallSvg className="market-small-svg"/>
                <span>Add</span>
            </div>
        </div>
     </div>
 );

}

export default ShopCard;