import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, startAddExpense, editExpense, startEditExpense, removeExpense, startRemoveExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

const uid = "thisisdemouserid";
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
    const expenseData = [];
    expenses.forEach(({ id, description, note, amount, createdAt}) => {
        expenseData[id] = { description, note, amount, createdAt } ;
    })
    database.ref(`users/${uid}/expenses`).set(expenseData).then(() => done());
})

test('should setup remove actions object', () => {
    const action = removeExpense('1234asfjhe');
    expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "1234asfjhe"});
})

test('should remove expense with id', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

test('should setup edit expenses object', () => {
    const action = editExpense('1234afdadf', {description : "Some dummy"});
    expect(action).toEqual({type: 'EDIT_EXPENSE', id: '1234afdadf', updates: { description : "Some dummy" }})
})

test("should edit expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    const updates = { description: 'React is Good', amount: 450, createdAt: 1286234234, note: "Wow" };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'EDIT_EXPENSE', id, updates });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(updates);
        done()
    })
})

test('should setup add expense object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({type: 'ADD_EXPENSE',expense: expenses[2] });
})

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Amul Butter',
        amount: 1800,
        note: 'Garlic and herbs',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'ADD_EXPENSE', expense: { id: expect.any(String), ...expenseData }})

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    })
})

test('should add default expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'ADD_EXPENSE', expense: { id: expect.any(String), ...expenseDefaults }})
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done();
    })
})

test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({type: 'SET_EXPENSES', expenses})
})

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'SET_EXPENSES', expenses});
        done();
    })
})