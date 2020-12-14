import React,{Component} from 'react';
import './App.css';
import Card from './Cards/Card';
import Test from './Cards/test'

class App extends Component {
  state = {
    test:[
      {name:'card rank-7 spades'}
    ]
  };
  render() {
    return (
      <div className="App">
        <Card name={this.state.test[0].name}/>
        <Test/>
      </div>
    );
  }
}

export default App;
