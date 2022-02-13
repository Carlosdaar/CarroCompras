import { Component } from 'react'

class Menos extends Component {
    render() {
        const {quitar, producto} = this.props
        return(
            <button onClick={() => quitar(producto)}>
                -
            </button>
        )
    }
}
export default Menos