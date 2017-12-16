import configureMockStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import thunk from 'redux-thunk';
import {login, logout} from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

test('should dispatch login action', () => {
    const uid = '2s7d3asdasdfaafaf';
    const action = login(uid);
    expect(action).toEqual({ type: 'LOGIN', uid });
})


test('should dispatch logout action', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' })
})