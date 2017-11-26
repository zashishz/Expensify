import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
})

const setCount = ({ counter = 1} = {}) => ({
    type: "SET",
    counter
})

const resetCounter = () => ({
    type:"RESET",
    counter: 0
})

const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + action.incrementBy }
        case "DECREMENT":
            return { counter: state.counter - action.decrementBy }
        case "SET":
            return { counter: action.counter }
        case "RESET":
            return { counter: action.counter }
        default:
            return state;
    }
};

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(decrementCount());

store.dispatch(resetCounter());

store.dispatch(setCount( { counter: 5 }));
store.dispatch(setCount());

