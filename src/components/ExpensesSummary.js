import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    expensesTotal = (expensesTotal/100).toFixed(2) + ' Rs.';

    return (
        <div>
            <h2>Viewing { expenseCount } { expenseWord } totalling { expensesTotal }</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpense = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpense.length,
        expensesTotal: selectExpensesTotal(visibleExpense)
    }    
}

export default connect(mapStateToProps)(ExpensesSummary);