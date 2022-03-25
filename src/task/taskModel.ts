import { Entity, Schema } from "redis-om";

export interface ITask {
  title: string
  status: string
  scheduledFor: string
}
// Name should be the same as the name of the entity
// https://github.com/redis/redis-om-node#a-note-for-typescript-users
interface Task extends ITask {}
class Task extends Entity { }

const taskSchema = new Schema(Task, {
  title: { type: 'string' },
  status: { type: 'string' },
  scheduledFor: { type: 'string' }
})

export default taskSchema