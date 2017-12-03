import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


test('should filters expenses based on text', () => {
    const filters = {
        text: 'e',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([expenses[2], expenses[1]])
})

test('should filters expenses based on startDate', () => {
    const filters = {
        text: '',
        sortBy:'date',
        startDate: moment(0),
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([expenses[2], expenses[0]])
})

test('should filters expenses based on endDate', () => {
    const filters = {
        text: '',
        sortBy:'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([expenses[0], expenses[1]])
})

test('should sort expenses based on Date', () => {
    const filters = {
        text: '',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort expenses based on Amount', () => {
    const filters = {
        text: '',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([expenses[2], expenses[1], expenses[0]])
})