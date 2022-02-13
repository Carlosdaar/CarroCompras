import { Component } from 'react'
const styles = {
    layout: {
        color: '#0A283e',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width:'1500px'
    }
}
class Layout extends Component {
    render() {
        return(
            <div style={styles.layout}>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout