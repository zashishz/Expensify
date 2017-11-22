import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact>Home</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
        <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>
        <NavLink activeClassName="is-active" to="/help">Need Help!</NavLink>
    </div>
);

export default Header;