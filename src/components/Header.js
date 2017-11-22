import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact>Home</NavLink>
        <NavLink activeClassName="is-active" to="/create" exact>Create Expense</NavLink>
        <NavLink activeClassName="is-active" to="/edit" exact>Edit Expense</NavLink>
        <NavLink activeClassName="is-active" to="/edit/3" exact>Edit New Expense</NavLink>
        <NavLink activeClassName="is-active" to="/help" exact>Need Help!</NavLink>
    </div>
);

export default Header;