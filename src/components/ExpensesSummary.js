import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    expensesTotal = (expensesTotal/100).toFixed(2) + ' Rs.';

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{ expenseCount }</span> { expenseWord } totalling <span>{ expensesTotal }</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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