import pubsub from '../../pubsub'

const people = [
  {
    id: '1',
    name: 'Person 1',
    age: 24
  },
  {
    id: '2',
    name: 'Person 2',
    age: 20
  }
]

const tasks = [
  {
    id: '1',
    user_id: '1',
    title: 'Task 1'
  },
  {
    id: '2',
    user_id: '2',
    title: 'Task 2'
  },
  {
    id: '3',
    user_id: '2',
    title: 'Task 3'
  },
  {
    id: '4',
    user_id: '1',
    title: 'Task 4'
  }
]

export const insertTask = (userId, title) => {
  const taskId = tasks.length + 1

  const newTask = {
    id: taskId.toString(),
    user_id: userId,
    title
  }

  tasks.push(newTask)

  const myPerson = people.find(p => p.id === userId)

  pubsub.publish('person-changed', myPerson)

  return newTask
}

export const getPeople = () => people

export const getTasksByUserId = userId => {
  const retorno = tasks.filter(t => t.user_id === userId)

  return retorno
}
