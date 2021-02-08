import React from 'react';
import Footer from '../components/Footer'
import ShopCardList from '../components/ShopCardList.js'
import '../styles/sections.sass'
const FooterSection = () => {
 return (
     <div className="section">
         <div className="title">
         Best Sellers
         </div>
         <ShopCardList/>
         <Footer/>
     </div>
 );

}

export default FooterSection;