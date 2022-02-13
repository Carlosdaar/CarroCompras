import { Component } from 'react'
import Boton from './boton'

const styles = {
    producto: {
        border: 'solid 1px #55719D',
        boxShadow: ' 0 5px 5px rgb(0, 0, 0, 0.3)',
        width: '25%',
        padding: '10px 14px',
        borderRadius: '8px',
        backgroundColor: '#FFF'
    },
    img: {
       width: '100%', 
       height: '270px'
    }
}
class Producto extends Component {
    render () {
        const { producto, agregarAlCarro } = this.props
        return(
           <div style={styles.producto}>
               <img style={styles.img} alt = {producto.name} src = {producto.img}/>
               <h3>{producto.name}</h3>
               <h3>Precio {producto.price}</h3>
               <Boton onClick ={() => agregarAlCarro(producto)}>
                   Añadir al carro
               </Boton>    
           </div>
        )
    }
}
export default Producto