import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
    <div className="player-score">
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.onChange(-1)}>-</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment" onClick={() => props.onChange(1)}>+</button>
        </div>
    </div>
);

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default Counter