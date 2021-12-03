import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';

const Detalle=(props)=>{
    if(!props.detalle){ 
        
        props.history.push('/')
        
        return null;
     }
const {nombre,img,descripcion}=props.detalle;

console.log(props.detalle);
    return (
      <Fragment>
        <main class="contenido__camisa">
          <h1>{nombre}</h1>
          <div class="camisa">
            <img class="camisa__imagen" src={img} alt="Aqui va la imagen" />
            <div class="camisa__texto">
              <p>{descripcion}</p>

              <form class="campo__formulario">
                <select class="camisa__campo">
                  <option disabled selected>
                    --Escoga una talla--
                  </option>
                  <option>Chica</option>
                  <option>Mediana</option>
                  <option>Grande</option>
                </select>
                <input
                  class="camisa__campo"
                  type="number"
                  placeholder="Cantidad"
                  min="1"
                  max="10"
                />
                <input
                  class="camisa__boton"
                  type="button"
                  value="Añadir al carrito"
                />
              </form>
            </div>
          </div>
        </main>
      </Fragment>
    );






}

export default withRouter(Detalle);