import { Component } from 'react'
import Logo from './logo'
import Carro from './carro'

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.15)'
    }
}
class Navbar extends Component {
    render (){
        const { carro, carroVisible, mostrarCarro, limpiarCarro, quitar, agregarAlCarro } = this.props
        return(
            <nav style={styles.navbar}>
                <Logo/>
                <Carro carro = { carro } carroVisible = {carroVisible} mostrarCarro = {mostrarCarro} limpiarCarro = {limpiarCarro} quitar = {quitar} agregarAlCarro = {agregarAlCarro}/>
            </nav>
        )
    }
}

export default Navbar