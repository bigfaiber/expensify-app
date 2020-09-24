import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore"
import { addExpense, removeExpense, editExpense } from "./actions/expenses"
import 'normalize.css/normalize.css'
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore()
// console.log(store.getState())
// store.subscribe(() => {
//   const state = store.getState()
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(store)
// })

store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 200, createdAt: -1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 50, createdAt: 2500 }))

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))