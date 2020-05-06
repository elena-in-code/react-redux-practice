import {
  ADD_MAIN_PLAYER,
  ADD_SECONDARY_PLAYER,
  REMOVE_MAIN_PLAYER,
  REMOVE_SECONDARY_PLAYER,
} from './types';

export const addMainPlayer = ({ player }) => {
  return {
    type: ADD_MAIN_PLAYER,
    player,
  };
};

export const addSecondaryPlayer = ({ player }) => {
  return {
    type: ADD_SECONDARY_PLAYER,
    player,
  };
};

export const removeMainPlayer = ({ player }) => {
  return {
    type: REMOVE_MAIN_PLAYER,
    player,
  };
};

export const removeSecondaryPlayer = ({ player }) => {
  return {
    type: REMOVE_SECONDARY_PLAYER,
    player,
  };
};
