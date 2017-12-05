import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should generate Expense list', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem { ...expense} />);
    expect(wrapper).toMatchSnapshot();
})