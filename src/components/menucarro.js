import { Component } from 'react'
import Boton from './boton'
import Menos from './menos'
import Mas from './mas'

const styles = {
    menucarro:{
        position: 'absolute',
        marginTop: '23px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '4px',
        width: '230px',
        right: '15px',
    },
    imagencarro: {
        width: '60px',
        height: '60px'
    },
    elemento: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 10px',
        borderBottom: 'solid 1px #AAA',
    },
    lista: {
        margin: '0px',
        padding: 0,

    }
}
class MenuCarro extends Component {
    render() {
        const { carro, limpiarCarro, quitar, agregarAlCarro} = this.props
        return(
            <div style={styles.menucarro}>
                <ul style={styles.lista}>
                    {carro.map(producto =>
                        <li  style= {styles.elemento} key={producto.name}>
                            {producto.name}
                            <img  style= {styles.imagencarro} src= {producto.img}/>
                            {producto.cantidad}
                            <Menos quitar = {quitar} producto = {producto} ></Menos><Mas agregarAlCarro = {agregarAlCarro} producto = {producto}></Mas>
                        </li>
                        )}
                    <li style={styles.elemento}>
                        <Boton onClick={limpiarCarro}>
                            limpiarCarro
                        </Boton>
                    </li>
                </ul>
            </div>
        )
    }
}
export default MenuCarro