import React from 'react';
import { connect } from 'react-redux';
import { removeSecondaryPlayer } from '../store/actions';

const SecondaryPlayers = ({ secondaryPlayers, removeSecondaryPlayer }) => (
  <section>
    <h2>Secondary Players</h2>
    <div className="players__container">
      {secondaryPlayers.map((secondaryPlayer) => (
        <article key={secondaryPlayer.id}>
          <div className="players__card">
            <img
              className="players__card-image"
              src={secondaryPlayer.pic}
              alt={secondaryPlayer.name}
            />
            <button
              className="players__btn"
              onClick={() => removeSecondaryPlayer(secondaryPlayer)}
            >
              Remove
            </button>
          </div>
          <p>{secondaryPlayer.name}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => {
  const { secondaryPlayers } = state.reducerTeamManager;
  return {
    secondaryPlayers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeSecondaryPlayer: (player) => {
    dispatch(removeSecondaryPlayer({ player }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryPlayers);
