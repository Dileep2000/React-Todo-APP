import React from 'react';
import './App.css';
import Todo from './todo'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    var div = document.querySelector(".brand-name");
    const getRandomColor = () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    const changeColor = () => {
      div.style.color= getRandomColor();
    }
    setInterval(changeColor,1000);
  }
  render () {
    return (
      <div className='app'>
        <h1 className='brand-name' id='brand'>Todo App</h1>
        <Todo></Todo>
      </div>
    );
  }
}

export default App;
