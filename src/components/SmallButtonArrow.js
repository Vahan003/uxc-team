import React from 'react';
import {ReactComponent as Arrow} from './icon/arrow-to-right.svg'
import '../styles/button-arrow.sass'
const SmallButtonArrow = (props) => {
 return (
     <div className="button-arrow-small" onClick= { props.click ?? (()=>{})}>
            <button className="button-text-small">{props.name ?? "Go"}</button>
            <div className="arrow">
            <Arrow className="arrow-svg"/>
            </div>
     </div>
 );

}

export default SmallButtonArrow;