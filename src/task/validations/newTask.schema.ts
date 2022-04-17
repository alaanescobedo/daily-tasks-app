import { InferType, object, SchemaOf, string } from 'yup'
import type { TaskClientData } from '../taskInterface'

const newTaskSchema: SchemaOf<TaskClientData> = object({
  title: string().required().min(3).max(70),
  scheduledFor: string().required(),
  description: string().notRequired()
})

export interface TaskValidation extends InferType<typeof newTaskSchema> { }
export default newTaskSchema
