import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// JSX Example
let user = {
    first: 'Shahnawaz',
    last: 'Ali'
};

// A function which returns a string
function getUserName(user){
    if(user){
        return user.first + ' ' + user.last;
    }
    return 'Hello Stranger!';
}

// A JSX element can have both html + JS ( with {} braces )
const responseFromReact = -<h2>Hi :) {getUserName(user)}</h2>;

// A COMPONENT (with JSX), which returns a JSX element
function Welcome(props){
    return <h1>Hello {props.name}</h1>;
}

// ANOTHER COMPONENT, which have other component
// Components must return a single root element.
function WelcomeTwo(){
    return <div>
        <Welcome name="Shahnawaz Ali"/>
        <Welcome name="Scarlet"/>
    </div>
}

/* Normal function */
function tick(){
    var time = new Date().toLocaleTimeString();
    ReactDOM.render(
        <div>
            /* USING JSX ELEMENT */
            {responseFromReact}
            /* ANOTHER JSX ELEMENT */
            <p>It is {time}</p>
            /* USING COMPONENT */
            <Welcome name="ReactJS"/>
            /* ANOTHER COMPONENT (with component inside) */
            <WelcomeTwo/>
        </div>
        ,
        document.getElementById('root')
    );
}

/* Timeout */
setInterval(tick, 1000);