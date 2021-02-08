import React from 'react';
import ButtonArrow from './ButtonArrow'
import '../styles/card.sass'
const Card = (props) => {
 return (
     <div className="card">
         <img className="card-img" src={props.img ?? ""} alt={props.name ?? ""}/>
         <ButtonArrow name = {props.name} click={props.click}/>
     </div>
 );

}

export default Card;