export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((pre, curr) => pre + curr, 0)
}