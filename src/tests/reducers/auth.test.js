import authReducer from '../../reducers/auth';

test('should handle LOGIN action on reducer', () => {
    const uid = '12sd3idee';
    const action = {
        type: 'LOGIN',
        uid
    };
    expect(authReducer({}, action)).toEqual({ uid });
});

test('should handle LOGOUT action on reducer', () => {
    const action = {
        type: 'LOGOUT'
    };
    expect(authReducer({uid: '89yjss723y247'}, action)).toEqual({});
});