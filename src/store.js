import { createStore } from 'redux';

const initialState = {
  players: [
    {
      id: 1,
      name: 'Juan ',
      pic: 'https://via.placeholder.com/150/92c952',
    },
    {
      id: 2,
      name: 'Marta',
      pic: 'https://via.placeholder.com/150/771796',
    },
    {
      id: 3,
      name: 'Alejo',
      pic: 'https://via.placeholder.com/150/24f355',
    },
    {
      id: 4,
      name: 'Eider',
      pic: 'https://via.placeholder.com/150/d32776',
    },
    {
      id: 5,
      name: 'Alvaro',
      pic: 'https://via.placeholder.com/150/f66b97',
    },
    {
      id: 6,
      name: 'Clara',
      pic: 'https://via.placeholder.com/150/56a8c2',
    },
    {
      id: 7,
      name: 'Jessie',
      pic: 'https://via.placeholder.com/150/b0f7cc',
    },
    {
      id: 8,
      name: 'Manu',
      pic: 'https://via.placeholder.com/150/54176f',
    },
    {
      id: 9,
      name: 'Tim',
      pic: 'https://via.placeholder.com/150/810b14',
    },
    {
      id: 10,
      name: 'Loma',
      pic: 'https://via.placeholder.com/150/51aa97',
    },
    {
      id: 11,
      name: 'Duma',
      pic: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      id: 12,
      name: 'Rio',
      pic: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      id: 13,
      name: 'Momoka',
      pic: 'https://via.placeholder.com/150/197d29g',
    },
  ],
  mainPlayers: [],
  secondaryPlayers: [],
};

const reducerTeamManager = (state = initialState, action) => {
  if (action.type === 'ADD_MAIN_PLAYER') {
    return {
      ...state,
      mainPlayers: state.mainPlayers.concat(action.player),
      players: state.players.filter((player) => player.id !== action.player.id),
    };
  }
  if (action.type === 'ADD_SECONDARY_PLAYER') {
    return {
      ...state,
      secondaryPlayers: state.secondaryPlayers.concat(action.player),
      players: state.players.filter((player) => player.id !== action.player.id),
    };
  }

  if (action.type === 'REMOVE_MAIN_PLAYER') {
    return {
      ...state,
      mainPlayers: state.mainPlayers.filter(
        (mainPlayer) => mainPlayer.id !== action.player.id
      ),
      players: state.players.concat(action.player),
    };
  }

  if (action.type === 'REMOVE_SECONDARY_PLAYER') {
    return {
      ...state,
      secondaryPlayers: state.secondaryPlayers.filter(
        (secondaryPlayer) => secondaryPlayer.id !== action.player.id
      ),
      players: state.players.concat(action.player),
    };
  }

  return state;
};

export default createStore(reducerTeamManager);
