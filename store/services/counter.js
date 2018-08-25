import actions from '../actions';

export const incrementCount = () => {
  return (dispatch) => {
    dispatch({ type: actions.INCREMENT_COUNT });
  };
};

export const decrementCount = () => {
  return (dispatch) => {
    dispatch({ type: actions.DECREMENT_COUNT });
  };
};

export const resetCount = () => {
  return (dispatch) => {
    dispatch({ type: actions.RESET_COUNT });
  };
};

export default {
  incrementCount,
  decrementCount,
  resetCount,
};
