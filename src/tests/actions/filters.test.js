import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

test('should generate set start date object', () => {
    const action = setStartDate(moment().valueOf());
    expect(action).toEqual({ type: "START_DATE", startDate: expect.any(Number)});
})

test('should generate set end date object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({ type: "END_DATE", endDate: moment(0)});
})

test('should generate sort by date object', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE'});
})

test('should generate sort by amount object', () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT'});
})

test('should generate empty text filter object for default parameter', () => {
    const action = setTextFilter();
    expect(action).toEqual({ type: 'TEXT_FILTER', text: ''});
})

test('should generate set text filter object', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({ type: 'TEXT_FILTER', text: 'bill'});
})