import { CALL_API, CALL_API_ERROR, CALL_API_SUCCESS, CALL_API_COMPLETED } from "../actionTypes";

const initialState = {
  loading: false, //for loader
  error: null,
  url: null,
  json: null, //intermediate result
  result: null //final result
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CALL_API: {
      const { url } = action;
      return {
        ...state,
        url: url,
        result: null,
        loading: true
      };
    }
    case CALL_API_SUCCESS: {
      const { json } = action;
      return {
        ...state,
        json: json,
        error: null
      };
    }
    case CALL_API_ERROR: {
      const { error } = action;
      return {
        ...state,
        result: null,
        error: error,
        loading: false
      };
    }
    case CALL_API_COMPLETED: {
      const { result } = action;
      return {
        ...state,
        error: null,
        json: null,
        loading: false,
        result: result
      };
    }
    default:
      return state;
  }
}