import apiReducer from './apiReducer';
import * as actions from '../actions';

const state = {
    loading: false,
    error: "error: uff",
    url: null,
    json: { "a": 1, "b": 2 },
    result: 55
}

describe('API reducers', () => {
    it('callApi action should have to be reset, contain loading:true and our url', () => {
        //test data
        const action = actions.callApi('http://google.com');        
        //action
        const newState = apiReducer(state, action);
        //expect
        expect(newState).toStrictEqual({
            loading: true,
            error: null,
            url: "http://google.com",
            json: null,
            result: null
        })

    })
})