import React from 'react';
import Selector from './Selector'
import '../styles/selector-list.sass'
const SelectorList = () => {
 return (
     <div className="selector-list">
         <Selector name={"Living Room"} option = {["Sofas", "Tables", "Chairs", "Closets"]}/>
         <Selector name={"Bedroom"} option = {["Sofas", "Tables", "Chairs", "Closets"]}/>
         <Selector name={"Kitchen"} option = {["Sofas", "Tables", "Chairs", "Closets"]}/>
         <Selector name={"Outdoor"} option = {["Sofas", "Tables", "Chairs", "Closets"]}/>
         <Selector name={"Office"} option = {["Sofas", "Tables", "Chairs", "Closets"]}/>
         <Selector name={"Restaurants"} option = {["Sofas", "Tables", "Chairs", "Closets"]}/>
     </div>
 );

}

export default SelectorList;