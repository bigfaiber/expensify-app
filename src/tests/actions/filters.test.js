import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";
import moment from 'moment'
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate end date action object', () => {
  const action = setEndDate(moment(1000000))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1000000)
  })
})

test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({
    type: 'SET_SORT_BY_DATE'
  })
})

test('should generate sort by amount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SET_SORT_BY_AMOUNT'
  })
})

test('should generate set text action object with param text', () => {
  const text = 'gas'
  expect(setTextFilter(text)).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('should generate set text action object without param text', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})
