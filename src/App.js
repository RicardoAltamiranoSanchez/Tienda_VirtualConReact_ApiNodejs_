
//Verificar sobre el switch y el routes se cambio la sintaxis en la  nueva version 6
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Axios from './config/axios';
import Index from './Paginas/Home';
import Conocenos from './Paginas/Conocenos';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Detalle from './Paginas/Detalle';
function App() {

  const [bandera,setBandera]=useState(false);
   const [informacion,setInformacion]=useState([]);
   console.log(process.env.REACT_APP_BACKEND_URL);
  useEffect(()=>{



    const PeticionBackend=async()=>{
    
     await Axios({
      method:'get',
      url:'/Api/playeras',
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",

      }
     }).then(response=>{  
    console.log(`desde la peticion response ${response.data}`);
       setInformacion(response.data);
       setBandera(true);

     }).catch(error=>{
      console.log(`Hubo un  error en la peticion ${error} `);
     })

    
      console.log(("La informacion del backend "));
      console.log(informacion);


    }

    PeticionBackend();
},[bandera])

  console.log("Desde App");

  return (
    <Router>
      <Header/>
    <Switch>
      <Route exact path="/" component={  () => <Index
      Informacion={informacion}
      
      />
      
      }/>
      <Route exact path="/Conocenos" component={  () => <Conocenos 
/>}


 />

<Route    exact path='/Detalle/:id'  
 render={(props) =>{
  const detalle=informacion.playeras.filter((playera)=>playera._id===props.match.params.id);
  return(

    <Detalle
    
    detalle={detalle[0]}
    setBandera={setBandera}
    
    />
  )
}}

  
/>

    </Switch>
     <Footer/>
    </Router>
  )
}

export default App;
