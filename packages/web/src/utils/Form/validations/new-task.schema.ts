import { WeekdaysId, WeekdaysLabel } from '@components/Form/Select/BaseSelect/SelectBase'
import { getSevenDays } from '@utils/getSevenDays'
import { boolean, InferType, object, SchemaOf, string } from 'yup'

export interface TaskClientData {
  title: string
  day: string
  hour: string
  recurrent: boolean
  priority: string
}

const weekdays = getSevenDays() as Array<{ id: WeekdaysId, label: WeekdaysLabel }>
const weekdaysValues = weekdays.map(({ id }) => id)

const newTaskSchema: SchemaOf<TaskClientData> = object({
  title: string().required().min(4).max(70),
  day: string().required().oneOf(weekdaysValues),
  hour: string().required(),
  recurrent: boolean().required(),
  priority: string().required().oneOf(['low', 'medium', 'high'])
})

export interface TaskValidation extends InferType<typeof newTaskSchema> { }
export default newTaskSchema
