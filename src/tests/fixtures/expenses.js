import moment from 'moment'

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 1925,
  createdAt: moment(0).subtract(3, 'days').valueOf()
}, {
  id: '3',
  description: 'Udemy',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(3, 'days').valueOf()
}]

