import { EMPTY_STRING } from '@constants'
import type { Task } from '@task/taskInterface'

export const seedIndividualTask: Task = {
  title: 'Learn Figma',
  scheduledFor: '2020-5-10T00:00:00.000Z',
  userID: 'ABC123',
  status: 'Pending',
  createdAt: new Date().toISOString(),
  completedAt: EMPTY_STRING,
  description: 'Learn how to use Figma',
  updatedAt: EMPTY_STRING
}

export const seedTasks: Task[] = [
  seedIndividualTask,
  {
    title: 'Learn React',
    scheduledFor: '2020-02-04T00:00:00.000Z',
    userID: 'ABC123',
    status: 'Pending',
    createdAt: new Date().toISOString(),
    completedAt: EMPTY_STRING,
    description: 'Learn how to use React'
  },
  {
    title: 'Continue with the Next project',
    scheduledFor: '2021-02-04T00:00:00.000Z',
    userID: 'ABC123',
    status: 'Pending',
    createdAt: new Date().toISOString(),
    completedAt: EMPTY_STRING,
    description: 'Continue with the Next project'
  },
  {
    title: 'Learn Vue',
    scheduledFor: '2022-06-06T00:00:00.000Z',
    userID: 'ABC123',
    status: 'Pending',
    createdAt: new Date().toISOString(),
    completedAt: EMPTY_STRING,
    description: 'Learn how to use Vue'
  },
  {
    title: 'Continue learning Java',
    scheduledFor: '2022-02-08T00:00:00.000Z',
    userID: 'ABC123',
    status: 'Pending',
    createdAt: new Date().toISOString(),
    completedAt: EMPTY_STRING,
    description: 'Continue learning Java'
  },
  {
    title: 'Learn Redis',
    scheduledFor: '2022-08-12T00:00:00.000Z',
    userID: 'ABC123',
    status: 'Pending',
    createdAt: new Date().toISOString(),
    completedAt: EMPTY_STRING,
    description: 'Learn how to use Redis'
  },
  {
    title: 'Deploy the Next project',
    scheduledFor: '2022-01-01T00:00:00.000Z',
    userID: 'ABC123',
    status: 'Completed',
    createdAt: new Date().toISOString()
  },
  {
    title: 'Add test to the daily-task app',
    scheduledFor: '2022-03-08T00:00:00.000Z',
    userID: 'ABC123',
    createdAt: new Date().toISOString(),
    status: 'Completed',
    completedAt: new Date().toISOString(),
    description: 'Add test to the daily-task app',
    updatedAt: EMPTY_STRING
  }
]
