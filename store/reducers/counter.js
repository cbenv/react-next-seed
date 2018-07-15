import actions from '../actions';

const DEFAULT_INITIAL_STATE = 0;

const reducer = (state = DEFAULT_INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNT:
      return state + 1;
    case actions.DECREMENT_COUNT:
      return state - 1;
    case actions.RESET_COUNT:
      return 0;
    default: return state;
  }
};

export default reducer;
