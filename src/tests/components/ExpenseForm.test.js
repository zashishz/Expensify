import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('should render Expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { preventDefault: () => {}});
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
    const value = "Some Description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { target: { value }});
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('should set note on textarea change', () => {
    const value = "Some Notes Description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', { target: { value }});
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('should set amount if valid input', () => {
    const value = "12.78";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: {value}});
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('should not set amount if invalid input', () => {
    const value = "12.789";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: {value}});
    expect(wrapper.state('amount')).toBe("");
    expect(wrapper).toMatchSnapshot();
})

test('should call onSubmit with valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => {}});
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        note: expenses[1].note,
        createdAt: expenses[1].createdAt
    });
})