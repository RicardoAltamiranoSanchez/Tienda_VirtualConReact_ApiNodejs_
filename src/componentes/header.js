import React ,{Fragment} from 'react';
import {Link} from 'react-router-dom';




const Header=()=>{
console.log("Desde el Header");

return (
  <Fragment>
 <header class='header'> 
      <Link to={'/'}><img class="header__logo" src="../../img/logo.png"/></Link >
  
  </header>
  <nav class="navegacion">
     <Link to={'/'} class="navegacion__enlace navegacion__enlace--modificado" >Tienda</Link>
     <Link to={'/Conocenos'} class="navegacion__enlace" >Sobre Nosotros</Link>
  
  </nav>	
  <main class="contenedor">
   
   </main>




  </Fragment>
)
}


export default Header;