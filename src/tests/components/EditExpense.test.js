import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[1]} />);
})

test('should render snapshot', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1]);
})

test('should handle edit expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenCalledWith(expenses[1].id);
})