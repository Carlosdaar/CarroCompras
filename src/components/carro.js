import { Component } from 'react'
import Bubble from './bubble'
import MenuCarro from './menucarro'

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        padding: '7px',
        borderRadius: '4px'

    },
    bubble: {
        position: 'relative',
        left: '8px', 
        top: '13px',
    }
}
class Carro extends Component {
    render() {
        const { carro, carroVisible, mostrarCarro, limpiarCarro, quitar, agregarAlCarro } = this.props
        const cantidad = carro.reduce((acumulador, elemento) => elemento.cantidad + acumulador, 0)
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 
                        ? <Bubble Value={cantidad} />
                        : null}
                </span>
                <button style={styles.carro} onClick={mostrarCarro}>
                    Carro
                </button>
                {carroVisible 
                ? <MenuCarro carro = {carro} limpiarCarro = {limpiarCarro} quitar= {quitar} agregarAlCarro = {agregarAlCarro}/>
                : null}
            </div>
        )
    }
}
export default Carro