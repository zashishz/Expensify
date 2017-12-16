import React from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <div>
        <h1>Expensify</h1>
        { /* <NavLink activeClassName="is-active" to="/" exact>Login</NavLink> */ }
        <NavLink activeClassName="is-active" to="/dashboard" exact>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create" exact>Create Expense</NavLink>
        { /*<NavLink activeClassName="is-active" to="/edit" exact>Edit Expense</NavLink> */}
        <button onClick={startLogout}>Logout</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);