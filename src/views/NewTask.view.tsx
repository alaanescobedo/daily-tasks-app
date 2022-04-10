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

// TODO: REFACTOR

export type Entries<T> = Array<{
  [K in keyof T]: [K, T[K]]
}[keyof T]>

function entries<T> (obj: T): Entries<T> {
  return Object.entries(obj as any) as any
}
/// ///
const fieldsConfig = entries(NEW_TASK_INPUT_CONFIG)

export const NewTaskView = (): JSX.Element => {
  const { fields, handleFieldsChange } = useForm(fieldsConfig)
  const { weekdays, handleSubmit } = useNewTask()

  const { title, day, hour, recurrent, priority } = fields

  return (
    <NewTaskFormLayout sendLabel='Create Task' handleSubmit={handleSubmit}>
      <TextArea value={title.config.value} handleChange={handleFieldsChange} placeholder={title.config.placeholder} id={title.config.id} name={title.config.id} />

      <InputGroup label={day.config.label} htmlFor={day.config.id} className={styles.group_date_day}>
        <Select options={weekdays} id={day.config.id} handleChange={handleFieldsChange} defaultValue={day.config.defaultValue} />
      </InputGroup>

      <InputGroup label='Hour' htmlFor={hour.config.id} className={styles.group_date_hour}>
        <Time id={hour.config.id} handleChange={handleFieldsChange} defaultValue={getCurrentTimePlus5minutes()} />
      </InputGroup>

      <InputGroup label='Recurrent' htmlFor={recurrent.config.id} className={styles.group_recurrent}>
        <Checkbox id={recurrent.config.id} />
      </InputGroup>

      <InputGroup label='Priority' htmlFor={priority.config.id} className={styles.group_priority}>
        <Select options={priority.config.options} id={priority.config.id} handleChange={handleFieldsChange} defaultValue={priority.config.defaultValue} />
      </InputGroup>
    </NewTaskFormLayout>
  )
}
