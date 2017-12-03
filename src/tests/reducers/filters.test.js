import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should generate filter with default values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set sort by to date', () => {
    const filterDefaultState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(filterDefaultState, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const textFilter = 'e';
    const state = filtersReducer(undefined, { type: 'TEXT_FILTER', text: textFilter});
    expect(state.text).toBe(textFilter);
})

test('should set start date', () => {
    const startMoment = moment();
    const state = filtersReducer(undefined, { type: 'START_DATE', startDate: startMoment });
    expect(state.startDate).toBe(startMoment);
})

test('should set end date', () => {
    const startMoment = moment();
    const state = filtersReducer(undefined, { type: 'END_DATE', endDate: startMoment });
    expect(state.endDate).toEqual(startMoment);
})