import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters filters={filters} setTextFilter={setTextFilter} setStartDate={setStartDate}
                setEndDate={setEndDate} sortByAmount={sortByAmount} sortByDate={sortByDate}
                />);
})

test('should render ExpenseListFilters snapshot correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    wrapper.find('input').prop('onChange')({target: {value: altFilters.text}});
    expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
})

test('should sort by date', () => {
    wrapper.find('select').prop('onChange')({target: {value: filters.sortBy}});
    expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount', () => {
    wrapper.find('select').prop('onChange')({target: {value: altFilters.sortBy}});
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate: altFilters.startDate, endDate: altFilters.endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
})

test('should handle focus change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toBe('startDate');
})