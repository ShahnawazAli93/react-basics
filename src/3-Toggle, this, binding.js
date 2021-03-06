import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState, props) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        );
    }

}

ReactDOM.render(
    <div>
        <Toggle />
    </div>
    ,
    document.getElementById('root')
);
