import { objectType, queryField } from 'nexus'

const carList = [
  {
    model: 'Model 1'
  },
  {
    model: 'Model 2'
  }
]

export const Car = objectType({
  name: 'Car',
  definition: t => {
    t.string('model')
  }
})

export const Cars = queryField('cars', {
  type: Car,
  list: true,
  resolve: () => carList
})
