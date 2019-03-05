import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <>
            <h2>Strikes:</h2>
            <div data-testid='strikes-display'>{this.props.strikes}</div>
            <h2>Balls:</h2>
            <div data-testid='balls-display'>{this.props.balls}</div>
            <h2>Fouls:</h2>
            <div data-testid='fouls-display'>{this.props.fouls}</div>
            <h2>Hits:</h2>
            <div data-testid='hits-display'>{this.props.hits}</div>
            </>

        )
    }
}

export default Display;