import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/action-get-countries';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();
 
describe('getCountries actions', () => {
    it('dispatches getCountries after a successfull API requets', () => {
        mock.onGet().reply(200, data)
        store.dispatch(actions.getCountries("Africa")).then(() => {
            let expectedActions = [
                {
                    type: 'ACTION_TYPES.FETCH_SUCCESS',
                    payload:data
                }
            ]
            console.log(store.getCountries())
            expect(store.getCountries()).toEqual(expectedActions)
        });
    });
    it('dispatches FETCH_FAIL after a FAILED API requets', () => {
        mock.onGet().reply(400, { error });
        store.dispatch(actions.getCountries()).then(() => {
            let expectedActions = [
               
                {
                    type: 'ACTION_TYPES.FETCH_FAIL',
                    payload: { error: { message: 'error message' } }
                }
            ]
            expect(store.getCountries()).toEqual(expectedActions)
        });
    });

 
    
});
