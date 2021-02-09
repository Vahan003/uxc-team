import React from 'react';
import SelectorList from '../components/SelectorList'
import ShopCardList from '../components/ShopCardList'
import '../styles/screens.sass'
const Furniture = () => {
 return (
     <div className="screen">
         <SelectorList/>
         <ShopCardList seeMoreOff={true}/>
     </div>
 );

}

export default Furniture;