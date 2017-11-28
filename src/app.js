import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, editExpense, removeExpense } from './actions/expenses';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "Electricity Bill", amount: 6000, createdAt: 21000 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 1000, createdAt: 12000 }));
store.dispatch(addExpense({ description: "Food Bill", amount: 6000, createdAt: 17000 }));

store.dispatch(setTextFilter({ text: "ga"}));

const jsx = (
    <Provider store = { store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));