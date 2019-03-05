import React from 'react';
import Display from '../Display/Display';

const Dashboard = props => {

    return (
        <>
            <div>
                <button data-testid="strike-button" onClick={() => props.strikeAction()}>Add a Strike!</button>
                <button data-testid="ball-button" onClick={() => props.ballAction()}>Add a Ball!</button>
                <button data-testid="foul-button" onClick={() => props.foulAction()}>Add a Foul!</button>
                <button data-testid="hit-button" onClick={() => props.hitAction()}>Add a Hit!</button>
            </div>
      
        </>
        )
}

export default  Dashboard;