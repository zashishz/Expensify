import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpense extends React.Component {
    
    editExpense = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    startRemoveExpense = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    expense = {this.props.expense}
                    onSubmit={ this.editExpense }
                />
                <button onClick={this.startRemoveExpense}>Remove</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);