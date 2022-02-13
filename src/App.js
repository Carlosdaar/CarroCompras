import { Component } from 'react'
import Productos from './components/productos'
import Layout from './components/layout'
import Title from './components/title'
import Navbar from './components/navbar'

class App extends Component {
  state = {
    productos : [
      {name : 'gatos-negros', price : 300, img : '/productos/negros.jpg'},
      {name : 'gatos-blancos', price : 400, img : '/productos/blancos.jpg'},
      {name : 'gatos-cafes', price : 500, img : '/productos/cafes.jpg'}
    ],
    carro: [],

    carroVisible: false, 
  }
  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(elemento => elemento.name === producto.name)) {
      this.setState({
        carro: carro.map(x => x.name === producto.name
          ? ({
            ...x, cantidad: x.cantidad+1})
          : x 
          )
      })
    } else {
        this.setState({
          carro: this.state.carro.concat({...producto, cantidad: 1})
        })
      }
  }
  mostrarCarro = () => {
    if (!this.state.carro.length) {
      this.setState({ carroVisible: this.state.carroVisible})
    } else {
        this.setState({ carroVisible: !this.state.carroVisible })
      }
  }
  
  quitar = (producto) => {
    const { carro } = this.state
    if (producto.cantidad === 1) {
      this.setState({carro: carro.filter(elemento => producto!==elemento)})
      if (this.state.carro.length == 1) {this.setState({ carroVisible: false})}
    } else {
        this.setState({
          carro: carro.map(x => x.name === producto.name
            ? ({
              ...x, cantidad: x.cantidad-1})
            : x 
            )
          })
        }
    console.log(this.state.carroVisible)
  }


  limpiarCarro = () => {
    this.setState({carro: [], carroVisible: false})
  }

  render() {
    const {carroVisible} = this.state
    return (
      <div>
        <Navbar
          carro = {this.state.carro}
          carroVisible = {this.state.carroVisible}
          mostrarCarro = {this.mostrarCarro}
          limpiarCarro = {this.limpiarCarro}
          quitar = {this.quitar}
          agregarAlCarro = {this.agregarAlCarro}
        />
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro = {this.agregarAlCarro}
            productos = {this.state.productos} 
          /> 
        </Layout>
      </div>
    )
  }
}

export default App;
