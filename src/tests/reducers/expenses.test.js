import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should add a new expense object', () => {
    const expense = {
        id: 4,
        description: 'Book',
        amount: 2800,
        note: '500 Days of Summer',
        createdAt: 2000
    }
    const action = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(action).toEqual([...expenses, expense])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 5 // Random ID
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should edit expense by id', () => {
    const updates = {
        description: 'Huh! this is new Description'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: updates
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], {...expenses[1], ...updates}, expenses[2]])
})

test('should not edit expense if id not found', () => {
    const updates = {
        description: 'Huh! this is new Description'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: 5, //Random Description
        updates: updates
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should set state to provide expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})