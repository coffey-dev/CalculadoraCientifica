import React from 'react';
import Boton from './boton';
import '../estilos/PanelBotones.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDivide, faTimes, faBackspace, faMinus, faPlus, faEquals, faPercentage, faSquareRootAlt, } from '@fortawesome/free-solid-svg-icons'


class PanelBotones extends React.Component {

    handleClick = buttonName => {
        this.props.clickHandler(buttonName)
    }

    render() {
        
        var divide = <FontAwesomeIcon icon={faDivide} />
        var multiply = <FontAwesomeIcon icon={faTimes} />
        var del = <FontAwesomeIcon icon={faBackspace} />
        var minus = <FontAwesomeIcon icon={faMinus} />
        var plus = <FontAwesomeIcon icon={faPlus} />
        var equals = <FontAwesomeIcon icon={faEquals} />
        var percentage = <FontAwesomeIcon icon={faPercentage} />
        var squareRoot = <FontAwesomeIcon icon={faSquareRootAlt} />
        
        

        return (
            <div className="boton-contenedor">


                <div className="fila">

                <Boton name='(' clickHandler={this.handleClick} operador />
                <Boton name="sin" value='sin' clickHandler={this.handleClick} />
                <Boton name="7" clickHandler={this.handleClick} />
                <Boton name="4" clickHandler={this.handleClick} />
                <Boton name="1" clickHandler={this.handleClick} />
                <Boton name="." clickHandler={this.handleClick} />
                </div>

                <div className="fila">
                
                <Boton name=')' clickHandler={this.handleClick} operador />
                <Boton name='cos' value='cos' clickHandler={this.handleClick} />
                <Boton name="8" clickHandler={this.handleClick} />
                <Boton name="5" clickHandler={this.handleClick} />
                <Boton name="2" clickHandler={this.handleClick} />
                <Boton name="0" clickHandler={this.handleClick} />
                
                </div>

                <div className="fila">

                <Boton name='x!' value='factorial' clickHandler={this.handleClick} />
                <Boton name="tan" value='tan' clickHandler={this.handleClick} />
                <Boton name="9" clickHandler={this.handleClick} />
                <Boton name="6" clickHandler={this.handleClick} />
                <Boton name="3" clickHandler={this.handleClick} />
                <Boton name="π" value='pi' clickHandler={this.handleClick} />
                </div>

                <div className="fila">

                <Boton name="x²" value='square' clickHandler={this.handleClick} />
                <Boton name="x³" value='cube' clickHandler={this.handleClick} />
                <Boton name={divide} value='/' clickHandler={this.handleClick} operador />
                <Boton name={multiply} value='*' clickHandler={this.handleClick} operador />
                <Boton name={minus} value='-' clickHandler={this.handleClick} operador />
                <Boton name={plus} value='+' clickHandler={this.handleClick} operador />
                </div>

                <div className="fila">
                    
                <Boton name="√" value='sqrt' clickHandler={this.handleClick} />
                <Boton name="∛" value='cbrt' clickHandler={this.handleClick} />
                <Boton name={percentage} value='%' clickHandler={this.handleClick} operador />
                <Boton name='log' value='log' clickHandler={this.handleClick} />
                <Boton name="C" clickHandler={this.handleClick} naranja />
                <Boton name="MR" clickHandler={this.handleClick} naranja />
                </div>

                <div className="fila">
                <Boton name="libre" value='libre' clickHandler={this.handleClick} />
                <Boton name="xʸ" value='power' clickHandler={this.handleClick} />
                <Boton name="ln" value='ln' clickHandler={this.handleClick} />
                <Boton name="e" clickHandler={this.handleClick} />
                <Boton name={equals} value='=' clickHandler={this.handleClick} azul />
                <Boton name={del} value='del' clickHandler={this.handleClick} naranja />
                </div>


    </div>
        
         
        )
    }
}

export default PanelBotones;