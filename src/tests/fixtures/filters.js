import moment from 'moment';

const filter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilter = {
    text: 'bill',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(4, 'days')
};

export { filter, altFilter };