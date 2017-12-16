import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth';

export const Login = ( { startLogin } ) => (
    <div>
        <h4>Login</h4>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(Login);