import { Entity, Schema } from 'redis-om'
import type { Task } from './taskInterface'

// Name should be the same as the name of the entity
// https://github.com/redis/redis-om-node#a-note-for-typescript-users
interface TaskEntity extends Task { }
class TaskEntity extends Entity { }

const taskSchema = new Schema(TaskEntity, {
  title: { type: 'string' },
  description: { type: 'string' },
  status: { type: 'string' },
  scheduledFor: { type: 'string' },
  createdAt: { type: 'string' },
  completedAt: { type: 'string' },
  updatedAt: { type: 'string' },
  userID: { type: 'string' }
})

export default taskSchema
