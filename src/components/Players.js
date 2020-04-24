import React from 'react';
import { connect } from 'react-redux';
import './Players.css';
import { addMainPlayer, addSecondaryPlayer } from '../redux/actions';

const Players = ({ players, addMainPlayer, addSecondaryPlayer }) => {
  return (
    <section>
      <h2>Players</h2>
      <div className="players__container">
        {players.map((player) => (
          <article className="players__card" key={player.id}>
            <img
              className="players__card-image"
              src={player.pic}
              alt={player.name}
            />
            <h3>{player.name}</h3>
            <div>
              <button
                className="players__btn"
                onClick={() => addMainPlayer(player)}
              >
                Main Player
              </button>
              <button
                className="players__btn"
                onClick={() => addSecondaryPlayer(player)}
              >
                Secondary Player
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
  addMainPlayer: (player) => {
    dispatch(addMainPlayer({ player }));
  },
  addSecondaryPlayer: (player) => {
    dispatch(addSecondaryPlayer({ player }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
