import React from 'react';
import {ReactComponent as LogoSvg} from './icon/logo.svg'
import '../styles/logo.sass'
const Logo = () => {
 return (
     <div className="logo">
         <LogoSvg className="logo-svg"/>
     </div>
 );

}

export default Logo;