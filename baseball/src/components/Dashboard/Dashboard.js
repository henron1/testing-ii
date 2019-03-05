import React from 'react';
import Display from '../Display/Display';

class Dashboard extends React.Component {
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
          if (this.state.hit === 1) {
              this.setState({strikes:0, balls:0})
          } else {
              this.setState({ hits:this.state.hits + 1 })
          }
      }
    

    render () {
        return (
            <>
            <div>
                <button data-testid="strike-button" onClick={() => this.strikeAction()}>Add a Strike!</button>
                <button data-testid="ball-button" onClick={() => this.ballAction()}>Add a Ball!</button>
                <button data-testid="foul-button" onClick={() => this.foulAction()}>Add a Foul!</button>
                <button data-testid="hit-button" onClick={() => this.hitAction()}>Add a Hit!</button>
            </div>
            <Display balls={this.state.balls} strikes={this.state.strikes} fouls={this.state.fouls} hits={this.state.hits}/>
            </>
        )
    }
}

export default  Dashboard;