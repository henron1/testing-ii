import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Display from './components/Display/Display';

class App extends Component {
 
  state = {
    strikes: 0,
    balls: 0,
    fouls:0,
    hits:0,
  };

  strikeAction = () => {
    if(this.state.strikes === 3) {
      this.setState({ strikes:0, balls:0 })
    } else {
      this.setState({strikes:this.state.strikes + 1 })
    }
  }

  ballAction = () => {
    if(this.state.balls === 4) {
      this.setState({ strikes:0, balls:0 })
    } else {
      this.setState({balls:this.state.balls + 1})
    }
  }

  foulAction = () => {
    if(this.state.fouls === 1 && this.state.strikes < 2) {
      this.setState({strikes:this.state.strikes + 1, fouls:this.state.fouls + 1})
    } else {
      this.setState({fouls:this.state.fouls + 1})
    }
  }

  hitAction = () => {
     this.setState({ hits:this.state.hits + 1, strikes: 0, balls:0})
  }


  render() {
    return (
      <div className="App">
        <Dashboard strikeAction={this.strikeAction} ballAction={this.ballAction} foulAction={this.foulAction} hitAction={this.hitAction}/>
        <Display stateOnProps={this.state} />
      </div>
    );
  }
}

export default App;
