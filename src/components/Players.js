import React from 'react';
import { connect } from 'react-redux';

const Players = ({ players }) => {
  return (
    <section>
      <h2>Players</h2>
      <div className="players__container">
        {players.map((player) => (
          <article className="players__card">
            <img src={player.pic} alt={player.name} />
            <h3>{player.name}</h3>
            <div>
              <button>Main Player</button>
              <button>Secondary Player</button>
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

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
