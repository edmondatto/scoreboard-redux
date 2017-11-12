import React from 'react';
import PropTypes from 'prop-types';

const Stats = props => {
    const totalPlayers = props.players.length;
    const totalPoints = props.players.reduce((total, player) => total + player.score, 0);
    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players</td>
                <td>{totalPlayers}</td>
            </tr>
            <tr>
                <td>Total points</td>
                <td>{totalPoints}</td>
            </tr>
            </tbody>
        </table>
    )
};

Stats.propTypes = {
    players: PropTypes.array.isRequired,
};

export default Stats