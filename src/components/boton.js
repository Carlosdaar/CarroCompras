import { Component } from 'react'
const styles = {
    boton: {
        backgroundColor : '#0A283E',
        border : 'none',
        borderRadius: '3px',
        color: '#fff',
        cursor: 'pointer',
        padding: '10px'
    }
}
class Boton extends Component {
    render() {
        return(
           <button style={styles.boton}{...this.props}/>
        )
    }
}

export default Boton