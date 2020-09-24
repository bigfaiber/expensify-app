import { createStore } from "redux";

// Action generators - function that return action objects


const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: typeof decrementBy === 'number' ? decrementBy : 1
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action, return an object that represents the state

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state
  }
}

const store = createStore(countReducer)


// Actions: an object that gets sent to the store
// walk, stop_walking, sit, work.

// I'd like to increment the count

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
}
)

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(decrementCount({ decrementBy: 2}))
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(decrementCount({ decrementBy: 2}))
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(decrementCount({ decrementBy: 2}))
store.dispatch(setCount({ count: 2 }))

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

// store.dispatch({
//   type: 'INCREMENT'
// })
// store.dispatch({
//   type: 'INCREMENT'
// })
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 3
// })

store.dispatch({
  type: 'SET',
  count: 101
})

