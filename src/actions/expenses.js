import uuid from 'uuid';
import database from '../firebase/firebase';

// Expenses Actions

export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

// Custom function to store Data to firebase - async-actions - react-thunk
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const {

            description = '',
            note = '',
            amount = 0,
            createdAt = 0

        } = expenseData;

        const expense = { description, note, amount, createdAt };
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses`).push(expense)
            .then((ref) => {
                dispatch(addExpense({ id: ref.key, ...expense }))
            });
    }
}

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ( id ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id));
        })
    }
}

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        })
    }
}

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((child) => {
                expenses.push({
                    id: child.key,
                    ...child.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}