import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        <p>{props.expenses.length}</p>
    </div>
);

export default connect((state) => {
    return {
        expenses: state.expenses
    }
})(ExpenseList);