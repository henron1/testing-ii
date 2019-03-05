import React from 'react';

const Display = props => {
    
    return (
        <>
            <h2>Strikes:</h2>            
            <div data-testid='strikes-display'>{props.stateOnProps.strikes}</div>
            <h2>Balls:</h2>
            <div data-testid='balls-display'>{props.stateOnProps.balls}</div>
            <h2>Fouls:</h2>
            <div data-testid='fouls-display'>{props.stateOnProps.fouls}</div>
            <h2>Hits:</h2>
            <div data-testid='hits-display'>{props.stateOnProps.hits}</div>
        </>

        )
}

export default Display;