import { EMPTY_STRING } from '@constants'
import type { User } from '@user/userInterface'

export const seedUsers: User[] = [
  {
    username: 'admin_01',
    password: 'adminFixed1!',
    email: 'admin@admin.com',
    tasks: [],
    active: true,
    createdAt: '2020-05-10T00:00:00.000Z',
    updatedAt: EMPTY_STRING
  },
  {
    username: 'user_01',
    password: 'userFixed1!',
    email: 'user@user.com',
    tasks: [],
    active: true,
    createdAt: '2020-05-10T00:00:00.000Z',
    updatedAt: EMPTY_STRING
  },
  {
    username: 'inactive',
    password: 'inactiveFixed!',
    email: 'inactive@inactive.com',
    tasks: [],
    active: false,
    createdAt: '2020-05-10T00:00:00.000Z',
    updatedAt: EMPTY_STRING
  }
]
