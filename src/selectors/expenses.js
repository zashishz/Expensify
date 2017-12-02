import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate, createdAt }) => {

    const createdAtMoment = moment(createdAt);

    return expenses.filter((expense) => {
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy == 'date') return a.createdAt < b.createdAt ? 1 : -1;
        else if(sortBy == 'amount') return a.amount < b.amount ? 1: -1;
    })
};