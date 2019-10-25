import {
  stringArg,
  objectType,
  mutationField,
  idArg,
  queryField,
  subscriptionField
} from 'nexus'
import { getTasksByUserId, getPeople, insertTask } from './data'
import pubsub from '../../pubsub'

export const Task = objectType({
  name: 'Task',
  definition: t => {
    t.id('id')
    t.id('user_id')
    t.string('title')
  }
})

export const AddTaskMutation = mutationField('addTask', {
  type: Task,
  args: { userId: idArg(), title: stringArg() },
  resolve: (root, { userId, title }) => insertTask(userId, title)
})

export const Person = objectType({
  name: 'Person',
  definition: t => {
    t.id('id')
    t.string('name')
    t.int('age')
    t.list.field('tasks', {
      type: Task,
      resolve: parent => getTasksByUserId(parent.id)
    })
  }
})

export const PeopleQuery = queryField('people', {
  type: Person,
  list: true,
  resolve: getPeople
})

export const personChanged = subscriptionField('personChanged', {
  type: Person,
  subscribe: () => pubsub.asyncIterator('person-changed'),
  resolve: payload => payload
})
