import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render expenses summary with 1 expense' ,() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2000} />);
    expect(wrapper).toMatchSnapshot();
})
test('should correctly render expenses summary with multiple expense' ,() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={7} expensesTotal={2892334} />);
    expect(wrapper).toMatchSnapshot();
})