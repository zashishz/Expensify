import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import {addExpense, editExpense, removeExpense } from './actions/expenses';
// import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from './actions/filters';
// import selectExpenses from './selectors/expenses'
import {startSetExpenses} from './actions/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses =  selectExpenses(state.expenses, state.filters);
    // console.log(visibleExpenses);
// });

// store.dispatch(addExpense({ description: "Electricity Bill", amount: 6000, createdAt: 21000 }));
// store.dispatch(addExpense({ description: "Gas Bill", amount: 1000, createdAt: 12000 }));
// store.dispatch(addExpense({ description: "Food Bill", amount: 8000, createdAt: 17000 }));
// store.dispatch(editExpense('44b52b7d-d2e5-4b75-ab73-6173ee8ad394',{ description: "Fuud Bill" }));

// store.dispatch(setTextFilter("oo"));

const jsx = (
    <Provider store = { store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading..</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})
