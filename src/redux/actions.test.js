import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './actions';

import { CALL_API, CALL_API_SUCCESS, CALL_API_COMPLETED } from "./actionTypes";
import { API_PERSON, API_FACILITY, API_EXPOSURE } from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//simple actions
/*
describe('API actions', () => {
  it('callApi should create CALL_API action', () => {
    expect(actions.callApi('http://google.com')).toEqual({
      type: CALL_API,
      url: 'http://google.com'
    })
  })

  it('callApiError should create CALL_API_ERROR action', () => {
    expect(actions.callApiError('Error text')).toEqual({
      type: CALL_API_ERROR,
      error: 'Error text'
    })
  })
  
  it('callApiSuccess should create CALL_API_SUCCESS action', () => {
    expect(actions.callApiSuccess({"Fon": 1, "Dom": 4})).toEqual({
      type: CALL_API_SUCCESS,
      json: {"Fon": 1, "Dom": 4}
    })
  })

  it('callApiCompleted should create CALL_API_COMPLETED action', () => {
    expect(actions.callApiCompleted(44)).toEqual({
      type: CALL_API_COMPLETED,
      result: 44
    })
  })

})
*/

//main api action
describe('API async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('fulfills action chain when fetching API', () => {
        const inputValue = 'anything';

        const url1 = `${API_PERSON}/${inputValue}`;
        const r1 = {"person1": "Tom", "person2": "John"};

        const url2 = `${API_FACILITY}/Tom`;
        const r2 = {"facility1": 5, "facility2": 1.3};

        const url3 = `${API_EXPOSURE}/1.3`;
        const r3 = {"exposure": 3.4};

        // Mock the fetch() global to return a response 
        fetchMock.get(url1, r1);
        fetchMock.get(url2, r2);
        fetchMock.get(url3, r3);

        const expectedActions = [
            { type: CALL_API, url: url1 },
            { type: CALL_API_SUCCESS, json: r1 },
            { type: CALL_API, url: url2 },
            { type: CALL_API_SUCCESS, json: r2 },
            { type: CALL_API, url: url3 },
            { type: CALL_API_SUCCESS, json: r3 },
            { type: CALL_API_COMPLETED, result: 4.42 },
        ];
        const store = mockStore({});

        return store.dispatch(actions.fetchApi(inputValue)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
          })
    })
})