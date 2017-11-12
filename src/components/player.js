import React from 'react';
import PropTypes from 'prop-types';
import Counter from "./counter";

const Player = props => (
    <div className="players">
        <div className="player">
            <div className="player-name">
                <a className="remove-player" onClick={props.onRemove}>x</a>
                {props.name}
            </div>
            <Counter score={props.score} onChange={props.onScoreChanged}/>
        </div>
    </div>
);

Player.propTypes = {
    name: PropTypes.string.isRequired,
    onScoreChanged: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};


export default Player