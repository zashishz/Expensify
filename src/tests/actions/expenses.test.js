import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove actions object', () => {
    const action = removeExpense('1234asfjhe');
    expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "1234asfjhe"});
})

test('should setup edit expenses object', () => {
    const action = editExpense('1234afdadf', {description : "Some dummy"});
    expect(action).toEqual({type: 'EDIT_EXPENSE', id: '1234afdadf', updates: { description : "Some dummy" }})
})

test('should setup add expense object', () => {
    const expenseData = {
        description: 'July Month rent',
        note: 'Payment Done!',
        amount: '12300',
        createdAt: '212121212'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({type: 'ADD_EXPENSE',expense:{...expenseData, id: expect.any(String)} });
})

test('should setup addexpense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({ 
        type: 'ADD_EXPENSE', 
        expense:{ description: '', note: '', amount: 0, createdAt: 0, id: expect.any(String)} 
    });
})