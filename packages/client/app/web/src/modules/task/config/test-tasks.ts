import { TaskI } from "../task.interface";

export const tasks: { [key: string]: TaskI[] } = {
  '2022-04-11': [
    {
      title: 'Task 1',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-11',
      status: 'Pending',
      userID: 'user123'
    }
  ],
  '2022-04-12': [
    {
      title: 'Task 2',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-12',
      status: 'Pending',
      userID: 'user123'
    }, {
      title: 'Task 3',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-12',
      status: 'Pending',
      userID: 'user123'
    }
  ],
  '2022-04-13': [
    {
      title: 'Task 4',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-13',
      status: 'Pending',
      userID: 'user123'
    }
  ],
  '2022-04-14': [
    {
      title: 'Task 5',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-14',
      status: 'Pending',
      userID: 'user123'
    }
  ],
  '2022-04-15': [
    {
      title: 'Task 6',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-15',
      status: 'Pending',
      userID: 'user123'
    }
  ]
}
