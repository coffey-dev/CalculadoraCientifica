import React from 'react';
import '../estilos/Pantalla.css';

class Display extends React.Component {

    render() {
        return (
            <div className="contenedor-pantalla">
                <div>{this.props.value}</div>
            </div>
        )
    }
}

export default Display;