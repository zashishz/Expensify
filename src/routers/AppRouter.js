import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link} from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/create" exact component={AddExpense} />
                { /*<Route path="/edit" exact component={EditExpense} /> */ }
                <Route path="/edit/:id" exact component={EditExpense} />
                <Route path="/help" exact component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;