import React from 'react';
import '../estilos/boton.css';


class Boton extends React.Component {

    handleClick = () => {
    this.props.clickHandler((this.props.value) ? this.props.value : this.props.name)
    }
    render() {
        const className = [
            "boton-contenedor",
            this.props.azul ? "azul" : "",
            this.props.naranja ? "naranja" : "",
            this.props.operador? "operador" : "",
          ];
        return (    
            <div className={className.join(" ").trim()}><button className="button" onClick={this.handleClick}>{this.props.name}</button></div>
        )
    }
}

export default Boton;