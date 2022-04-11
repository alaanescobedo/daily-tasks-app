import { Checkbox } from '../components/Form/Checkbox/Checkbox'
import { Time } from '../components/Form/Input/TimeInput/Time'
import { InputGroup } from '../components/Form/InputGroup/InputGroup'
import { Select } from '../components/Form/Select/Select'
import { TextArea } from '../components/Form/TextArea/TextArea'
import { NEW_TASK_INPUT_CONFIG } from '../config/new-task.config'
import { useForm } from '../hooks/useForm'
import { getCurrentTimePlus5minutes, useNewTask } from '../hooks/useNewTask'
import { NewTaskFormLayout } from '../layouts/NewTaskFormLayout'
import styles from './NewTask.module.css'

// TODO: REFACTOR interface and util folder
export type Entries<T> = Array<{
  [K in keyof T]: [K, T[K]]
}[keyof T]>

export function entries<T> (obj: T): Entries<T> {
  return Object.entries(obj as any) as any
}
///
const fieldsConfig = entries(NEW_TASK_INPUT_CONFIG)

export const NewTaskView = (): JSX.Element => {
  const { fields, handleFieldsChange, handleSubmit, errors } = useForm(fieldsConfig)
  const { weekdays } = useNewTask()
  const { title, day, hour, recurrent, priority } = fields

  return (
    <NewTaskFormLayout sendLabel='Create Task' handleSubmit={handleSubmit}>
      <div style={{ gridColumn: '1 / -1', color: 'tomato', backgroundColor: 'rebeccapurple', padding: '0 1rem' }}>
        <p>{errors.title.errorMessage}</p>
        <p>{errors.day.errorMessage}</p>
        <p>{errors.hour.errorMessage}</p>
        <p>{errors.recurrent.errorMessage}</p>
        <p>{errors.priority.errorMessage}</p>
      </div>
      <TextArea value={title.value} handleChange={handleFieldsChange} placeholder={title.placeholder} id={title.id} />

      <InputGroup label={day.label} htmlFor={day.id} className={styles.group_date_day}>
        <Select options={weekdays} id={day.id} handleChange={handleFieldsChange} defaultValue={day.defaultValue} />
      </InputGroup>

      <InputGroup label='Hour' htmlFor={hour.id} className={styles.group_date_hour}>
        <Time id={hour.id} handleChange={handleFieldsChange} defaultValue={getCurrentTimePlus5minutes()} />
      </InputGroup>

      <InputGroup label='Recurrent' htmlFor={recurrent.id} className={styles.group_recurrent}>
        <Checkbox id={recurrent.id} checked />
      </InputGroup>

      <InputGroup label='Priority' htmlFor={priority.id} className={styles.group_priority}>
        <Select options={priority.options} id={priority.id} handleChange={handleFieldsChange} defaultValue={priority.defaultValue} />
      </InputGroup>
    </NewTaskFormLayout>
  )
}
