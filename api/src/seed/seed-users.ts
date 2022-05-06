import { EMPTY_STRING } from '@constants'
import type { User } from '@user/userInterface'

export const seedIndividualUser: User = {
  username: 'admin_01',
  password: 'adminFixed1!',
  email: 'admin@admin.com',
  tasks: [],
  active: true,
  verified: false,
  createdAt: '2020-05-10T00:00:00.000Z',
  updatedAt: EMPTY_STRING
}

export const seedUsers: User[] = [
  seedIndividualUser,
  {
    username: 'user_01',
    password: 'userFixed1!',
    email: 'user@user.com',
    tasks: [],
    active: true,
    verified: false,
    createdAt: '2020-05-10T00:00:00.000Z',
    updatedAt: EMPTY_STRING
  },
  {
    username: 'inactive',
    password: 'inactiveFixed!',
    email: 'inactive@inactive.com',
    tasks: [],
    active: false,
    verified: false,
    createdAt: '2020-05-10T00:00:00.000Z',
    updatedAt: EMPTY_STRING
  }
]
