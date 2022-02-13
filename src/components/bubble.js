import { Component } from 'react'

const styles = {
    bubble: {
        backgroundColor: '#E9725A',
        borderRadius:'15px',
        color: '#fff',
        padding: '1px 5px',
        fontSize: '0.9rem',
        width: '10px'
    }
}
class Bubble extends Component {
    getNumber(n) {
        if (!n) { return ' '}
        return n > 9 ? '9+' : n
    }
    render() {
        const { Value } = this.props
        return(
            <span style={styles.bubble}>
                {this.getNumber(Value)}
            </span>
        )
    }
}
export default Bubble