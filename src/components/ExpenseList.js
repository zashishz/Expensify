import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        { 
            props.expenses.map((expense) => {
                console.log(expense.id);
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        }
    </div>
);

export default connect((state) => {
    return {
        expenses: state.expenses
    }
})(ExpenseList);