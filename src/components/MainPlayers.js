import React from 'react';
import { connect } from 'react-redux';
import { removeMainPlayer } from '../store/actions';

const MainPlayers = ({ mainPlayers, removeMainPlayer }) => (
  <section>
    <h2>Main Players</h2>
    <div className="players__container">
      {mainPlayers.map((mainPlayer) => (
        <article key={mainPlayer.id}>
          <div className="players__card">
            <img
              className="players__card-image"
              src={mainPlayer.pic}
              alt={mainPlayer.name}
            />
            <button
              className="players__btn"
              onClick={() => removeMainPlayer(mainPlayer)}
            >
              Remove
            </button>
          </div>
          <p>{mainPlayer.name}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => {
  const { mainPlayers } = state.reducerTeamManager;
  return {
    mainPlayers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeMainPlayer: (player) => {
    dispatch(removeMainPlayer({ player }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPlayers);
