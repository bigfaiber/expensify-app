
export default (expenses) => {
    return expenses
    .map(item => item.amount)
    .reduce((sum, curr) => sum + curr, 0)
}
