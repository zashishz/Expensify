import React from 'react';
import { Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Login from '../components/Login';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/create" exact component={AddExpense} />
                { /*<Route path="/edit" exact component={EditExpense} /> */ }
                <Route path="/edit/:id" exact component={EditExpense} />
                <Route path="/help" exact component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;