import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, editExpense, removeExpense, startAddExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove actions object', () => {
    const action = removeExpense('1234asfjhe');
    expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "1234asfjhe"});
})

test('should setup edit expenses object', () => {
    const action = editExpense('1234afdadf', {description : "Some dummy"});
    expect(action).toEqual({type: 'EDIT_EXPENSE', id: '1234afdadf', updates: { description : "Some dummy" }})
})

test('should setup add expense object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({type: 'ADD_EXPENSE',expense: expenses[2] });
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Amul Butter',
        amount: 1800,
        note: 'Garlic and herbs',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'ADD_EXPENSE', expense: { id: expect.any(String), ...expenseData }})

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
    })
    done();
})

test('should add default expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'ADD_EXPENSE', expense: { id: expect.any(String), ...expenseDefaults }})

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done();
    })
})

// test('should setup addexpense object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({ 
//         type: 'ADD_EXPENSE', 
//         expense:{ description: '', note: '', amount: 0, createdAt: 0, id: expect.any(String)} 
//     });
// })