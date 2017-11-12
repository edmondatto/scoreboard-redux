import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';
import Header from "./header";
import Player from "./player";
import AddPlayerForm from "./addPlayer";

class Scoreboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            players: this.props.initialPlayers
        }
    }

    onScoreChanged(index, delta) {
        const players = this.state.players.slice();
        players[index].score += delta;
        this.setState({
            players: players
        });
    }

    onAddPlayer(name) {
        const playersArrayLength = this.state.players.length;
        const newId = playersArrayLength ? (this.state.players[playersArrayLength - 1].id) + 1 : 1;
        const newPlayer = {id: newId, name: name, score: 0};
        const players = this.state.players.concat(newPlayer);
        this.setState({
            players: players
        })
    }

    onDeletePlayer(index) {
        const players = this.state.players.slice();
        players.splice(index, 1);
        this.setState({
            players: players
        })

    }

    render() {
        return (
            <div className="scoreboard">
                <Header title={this.props.title} players={this.state.players}/>
                {this.state.players.map((player, index) =>
                    <Player
                        key={player.id}
                        {...player}
                        onScoreChanged={(delta) => this.onScoreChanged(index, delta)}
                        onRemove={() => this.onDeletePlayer(index)}
                    />)}
                <AddPlayerForm onAddPlayer={(name) => this.onAddPlayer(name)}/>
            </div>
        )
    }
}


Scoreboard.propTypes = {
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    })).isRequired
};

Scoreboard.defaultProps = {
    title: "Scoreboard"
};


export default Scoreboard