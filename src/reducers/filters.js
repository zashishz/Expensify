// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
export default (state = filtersReducerDefaultState, action) => {
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