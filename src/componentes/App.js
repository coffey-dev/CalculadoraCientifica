import React from 'react';
import Display from './Display';
import PanelBotones from './PanelBotones';
import Calcular from '../logica/Calcular';


class App extends React.Component {
    state = {
        total: '',
    }

    handleClick = buttonName => {
        this.setState(Calcular(this.state, buttonName))
    }

    render() {
        return (
            <React.Fragment>
          

            <Display value={ this.state.total} />
            <PanelBotones clickHandler={this.handleClick} />
           </React.Fragment> 

        )
    }
};

export default App;