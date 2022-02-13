import { Component } from 'react'

class Mas extends Component {
    render() {
        const { agregarAlCarro, producto} = this.props
        return(
            <button onClick={() => agregarAlCarro(producto)}>
                +
            </button>
        )
    }
}
export default Mas