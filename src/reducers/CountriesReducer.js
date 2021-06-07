import ACTION_TYPES from '../actions/actionTypes'
const initialState = {
  loading: false,
  result: [],
  error: null,
};
const mainReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_STARTED:
      return {
        ...state,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        result: payload,
        error: null,
      };
    case ACTION_TYPES.FETCH_FAIL:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
export default mainReducer;












