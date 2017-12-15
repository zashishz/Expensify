import moment from 'moment';

const expenses = [{
        id: '1',
        description: 'Gum',
        amount: 2000,
        note: '',
        createdAt: 0
    }, {
        id: '2',
        description: 'Rent',
        amount: 2200,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }, {
        id: '3',
        description: 'Water',
        amount: 2300,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

export default expenses;