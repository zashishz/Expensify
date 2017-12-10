import React from 'react';
import {shallow} from 'enzyme';
import {AddExpense} from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpense  startAddExpense={startAddExpense} history={history} />);
})

test('should render Add Expense Correctly', () => {
    expect(wrapper).toMatchSnapshot();
})


test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[2])
})