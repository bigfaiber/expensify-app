import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00')
  return (
    <div>
      <h1> Viewing {expenseCount} {expenseWord} totalling {expensesTotal}</h1>
    </div>
  )
}
const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  const expensesTotal = selectExpensesTotal(visibleExpenses)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: expensesTotal
  }
}

export default connect(mapStateToProps)(ExpensesSummary);
