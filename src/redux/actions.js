import { CALL_API, CALL_API_ERROR, CALL_API_SUCCESS, CALL_API_COMPLETED } from "./actionTypes";
import { API_PERSON, API_FACILITY, API_EXPOSURE } from "../constants";

export const callApi = url => ({
  type: CALL_API,
  url
});

export const callApiError = error => ({
  type: CALL_API_ERROR,
  error
});

export const callApiSuccess = json => ({
  type: CALL_API_SUCCESS,
  json
});

export const callApiCompleted = result => ({
  type: CALL_API_COMPLETED,
  result
});


//I found async / await approach more clean than fetch.then.then chain
//extracted each call to external function for easy testing

const loadJson = async (url, dispatch) => {
  dispatch(callApi(url));

  const r = await fetch(url);
  const json = await r.json();

  if (Object.entries(json).length > 0 && json.constructor === Object) {
    dispatch(callApiSuccess(json));
    return json;
    // we might delay response for development
    /*
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(json), 1000);
    });
    */
  } else {
    dispatch(callApiError("API error"));
    return Promise.reject();
  }

}

//thunk action creator

export function fetchApi(alpha) {
  return async dispatch => {

    const { person1 } = await loadJson(`${API_PERSON}/${alpha}`, dispatch);
    if (!person1) dispatch(callApiError("person1 is undefined"));

    const { facility1, facility2 } = await loadJson(`${API_FACILITY}/${person1}`, dispatch);
    if (!facility1) dispatch(callApiError("facility1 is undefined"));
    if (!facility2) dispatch(callApiError("facility2 is undefined"));

    const { exposure } = await loadJson(`${API_EXPOSURE}/${facility1}`, dispatch);
    if (!exposure) dispatch(callApiError("exposure is undefined"));

    if (exposure && facility2) {
      dispatch(callApiCompleted(exposure * facility2));
    }

  }
}