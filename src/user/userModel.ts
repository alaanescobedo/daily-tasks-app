import { Entity, Schema } from 'redis-om'
import type { User } from './userInterface'

// Name should be the same as the name of the entity
// https://github.com/redis/redis-om-node#a-note-for-typescript-users
interface UserEntity extends User, Entity { }
class UserEntity extends Entity { }

const userSchema = new Schema(UserEntity, {
  username: { type: 'string' },
  password: { type: 'string' },
  email: { type: 'string' },
  tasks: { type: 'string[]' },
  active: { type: 'boolean' },
  createdAt: { type: 'string' },
  updatedAt: { type: 'string' },
  verified: { type: 'boolean' }
}, {
  prefix: 'user:'
})

export default userSchema
