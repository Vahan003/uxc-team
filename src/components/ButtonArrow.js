import React from 'react';
import {ReactComponent as Arrow} from './icon/arrow-to-right.svg'
import '../styles/button-arrow.sass'
const ButtonArrow = (props) => {
 return (
     <div className="button-arrow" onClick= { props.click ?? (()=>{})}>
            <button className="button-text">{props.name ?? "Go"}</button>
            <div className="arrow">
            <Arrow className="arrow-svg"/>
            </div>
     </div>
 );

}

export default ButtonArrow;