import React from 'react';
import { connect } from 'react-redux';
import './Players.css';
import { addMainPlayer, addSecondaryPlayer } from '../store/actions';

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

const mapStateToProps = (state) => {
  const { players } = state.reducerTeamManager;
  return {
    players,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addMainPlayer: (player) => {
    dispatch(addMainPlayer({ player }));
  },
  addSecondaryPlayer: (player) => {
    dispatch(addSecondaryPlayer({ player }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
