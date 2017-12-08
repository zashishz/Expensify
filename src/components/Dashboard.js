import React from 'react';
import ExpenseList from  './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';


const Dashboard = () => (
    <div>
        This is Expesify Dashboard!
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default Dashboard;