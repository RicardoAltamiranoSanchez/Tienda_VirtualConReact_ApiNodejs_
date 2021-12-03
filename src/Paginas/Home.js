import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

//Nota debemos poner () aveces en vez de {} por que luego no agarra los elementos
const Index = ({Informacion}) => {


console.log(Informacion.msg);
if(Informacion.length===0){
return null;
}

 return ( 

     
   <Fragment>

<main class="contenedor">
    <div class="grid">

{Informacion.playeras.map((p) => (

<div class="producto">
  <Link to={`/Detalle/${p._id}`} key={p._id}>
  <img src={p.img} alt="Aqui va la imagen"/>
  <div class="producto__informacion">
 <p class="producto__nombre">{p.nombre}</p>
 <p class="producto__precio">${p.precio}</p>
  </div>
  </Link>
  </div>

)

 )}

<div class="grafico grafico__node" ></div>
<div class="grafico grafico__camisas"></div>
</div>
</main>
  

 
   </Fragment>



 );
 }

export default Index;