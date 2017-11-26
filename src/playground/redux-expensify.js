import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// Acions

// Expenses Actions

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = ({ id, updates } = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


// Filters Actions

const setTextFilter = ({ text = "" } = {}) => ({
    type: 'TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: "START_DATE",
    startDate
})

const setEndDate = (endDate) => ({
    type: "END_DATE",
    endDate
})

/**
 * REDUCERS
 */
// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id != action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id == action.id) return { ...expense, ...action.updates };
                else return expense;
            });
        default:
            return state;
    }
}

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "TEXT_FILTER":
            return { ...state, text: action.text }
        case "SORT_BY_AMOUNT":
            return { ...state, sortBy: 'amount' }
        case "SORT_BY_DATE":
            return { ...state, sortBy: 'date' }
        case "START_DATE":
            return { ...state, startDate: action.startDate }
        case "END_DATE":
            return { ...state, endDate: action.endDate }
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);



// Custom methods

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy == 'date') return a.createdAt < b.createdAt ? 1 : -1;
        else if(sortBy == 'amount') return a.amount < b.amount ? 1: -1;
    })
};

// store.subscribe(() => {
//     console.log(store.getState());
// })

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const firstExp = store.dispatch(addExpense({ description: "Coffee", amount: 10000, createdAt: -21000 }))
const secondExp = store.dispatch(addExpense({ description: "Rent", amount: 30500, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: firstExp.expense.id }))

// store.dispatch(editExpense({ id: secondExp.expense.id, updates: { description: "new PG", amount: 6000 } }));
// store.dispatch(setTextFilter({ text: "lol"}));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1125));
// store.dispatch(setEndDate(210));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());


const demoState = {
    expenses: [{
        id: 'ahsdhah4323njnjkfjksasd',
        description: 'Rent',
        note: 'This is the last payment',
        amount: 76300,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}