import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({ description, amount, id, dispatch }) => (
    <div>
        { description } , { amount }
        <button onClick={(e) => {
            dispatch(removeExpense(id));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);