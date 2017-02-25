import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// A Clock component (using function)
// function Clock(props){
//     return <div>
//         <h1>I am Clock and</h1>
//         <p>It is {props.date.toLocaleTimeString()}</p>
//     </div>
// }

// Converting above function into a class
/*
 * You can convert a functional component like Clock to a class in five steps:

 Create an ES6 class with the same name that extends React.Component.

 Add a single empty method to it called render().

 Move the body of the function into the render() method.

 Replace props with this.props in the render() body.

 Delete the remaining empty function declaration.
 * */
class Clock extends React.Component {

    // using state, replaced props with state
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            id: props.id
        };
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    /*
     * There are three things you should know about setState().
     * Do Not Modify State Directly (https://facebook.github.io/react/docs/state-and-lifecycle.html#do-not-modify-state-directly)
     * State Updates May Be Asynchronous (https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)
     * State Updates are Merged (https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-are-merged)
     * */

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>I am Clock {this.state.id}, and</h1>
                <p>It is {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }

}

/*
 * Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class.
 * This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
 * */
class App extends React.Component {
    render(){
        // each Clock component has its own state
        return (
            <div>
                <Clock id="2"/>
                <Clock id="3"/>
                <Clock id="4"/>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        /* Clock Component */
        <Clock id="1"/>
        /* App Component with three Clock components, each Clock sets up its own timer and updates independently. */
        <App />
    </div>
    ,
    document.getElementById('root')
);
