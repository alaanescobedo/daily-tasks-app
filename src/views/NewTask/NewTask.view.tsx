import { NEW_TASK_INPUT_CONFIG } from '@config/new-task.config'
import { useForm } from '@hooks'
import { NewTaskFormLayout } from '@layouts'
import { Checkbox, Time, InputGroup, Select, TextArea, WeekdaysId, WeekdaysLabel } from '@components/Form'

import styles from './NewTask.module.css'
import { getSevenDays } from '@utils/getSevenDays'
import { getCurrentTimePlus5minutes } from '@utils/getCurrentTimePlus5minutes'
import { getCurrentDate } from '@utils/getCurrentDate'

const weekdays = getSevenDays() as Array<{ id: WeekdaysId, label: WeekdaysLabel }>

export const NewTaskView = (): JSX.Element => {
  const { fields, handleFieldsChange, handleSubmit, errors } = useForm(NEW_TASK_INPUT_CONFIG)
  const { title, day, hour, recurrent, priority } = fields

  const minTime = getCurrentDate().split(',')[2].split(':').slice(0, 2).join(':').trim()

  return (
    <NewTaskFormLayout sendLabel='Create Task' handleSubmit={handleSubmit} id='newTask'>
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
        <Time id={hour.id} handleChange={handleFieldsChange} defaultValue={getCurrentTimePlus5minutes()} minTime={minTime} />
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
