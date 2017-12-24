import React from 'react';
import { connect } from 'react-redux';
import validateExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            { 
                props.expenses.length == 0 ? (
                    <div className="list-item list-item__message">
                        <span>No Expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
            }
        </div>
    </div>
);

export default connect((state) => {
    return {
        expenses: validateExpenses(state.expenses, state.filters)
    }
})(ExpenseList);