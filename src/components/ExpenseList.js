import React from 'react';
import { connect } from 'react-redux';
import validateExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        { 
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        }
    </div>
);

export default connect((state) => {
    return {
        expenses: validateExpenses(state.expenses, state.filters)
    }
})(ExpenseList);