//importo la libreria de react
import React,{Component} from "react";
//importamos los estilos
import './producto.css';
//creo una lista de datos
const listaProductos = [
    {
        id: 1,
        descripcion:'jarron las americas',
        precio:20000,
    },
    {
        id: 2,
        descripcion:'Escultura las americas',
        precio:20000,
    },
    {
        id: 3,
        descripcion:'morral las americas',
        precio:20000,
    }
];
//creo la clase
class Productos extends Component{
//creamos un constructor
//palabra clave props como parametro
constructor(props){
    //palabra clave super
    super(props);

    //palabra clave this
    //vamos a cambiar el estado de la lista
    this.state ={
        listaProductos: listaProductos
    }

    
    }

//renderizamos
render(){
    return(
        <div><h1>Artesanias las americas</h1>
        <div className="contenidotabla">
        <table>
        <tr><td>descripcion</td><td>precio</td><td>administrar</td> </tr> 
        {
            listaProductos.map(function(item){
                return (
                       <tr>
                        <td>{item.descripcion}</td>
                        <td>{item.precio}</td> 
                        <td><button>administrar</button></td> 
                        </tr>
                        )
                
            })
        }
        </table>
        </div>
        </div>
    )
}
}
//exporto la clase
export default Productos;

