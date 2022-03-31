import type { User } from '@user/userInterface'

export const seedUsers: User[] = [
  {
    username: 'admin',
    password: 'admin',
    email: 'admin@admin.com',
    tasks: [],
    active: true,
    createdAt: '2020-05-10T00:00:00.000Z',
    updatedAt: ''
  },
  {
    username: 'user',
    password: 'user',
    email: 'user@user.com',
    tasks: [],
    active: true,
    createdAt: '2020-05-10T00:00:00.000Z',
    updatedAt: ''
  },
  {
    username: 'inactive',
    password: 'inactive',
    email: 'inactive@inactive.com',
    tasks: [],
    active: false,
    createdAt: '2020-05-10T00:00:00.000Z',
    updatedAt: ''
  }
]
