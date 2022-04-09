import { Checkbox } from '../components/Form/Checkbox/Checkbox'
import { Time } from '../components/Form/Input/TimeInput/Time'
import { InputGroup } from '../components/Form/InputGroup/InputGroup'
import { PriorityId, PriorityLabel, Select } from '../components/Form/Select/Select'
import { TextArea } from '../components/Form/TextArea/TextArea'
import { useForm } from '../hooks/useForm'
import { useNewTask } from '../hooks/useNewTask'
import { NewTaskFormLayout } from '../layouts/NewTaskFormLayout'
import styles from './NewTask.module.css'

const priorityOptions: Array<{ id: PriorityId, label: PriorityLabel }> = [
  { id: 'low', label: 'Low' },
  { id: 'medium', label: 'Medium' },
  { id: 'high', label: 'High' }
]

const initialData = {
  ids: ['title_task', 'date_hour', 'date_day', 'recurrent', 'priority']
}

export const NewTaskView = (): JSX.Element => {
  const {
    weekdays,
    handleSubmit,
    textareaValue,
    handleTextArea,
    selectedDay,
    handleSelectedDay,
    selectedHour,
    handleSelectedHour,
    selectedPriority,
    handlePriority
  } = useNewTask()

  const { fields } = useForm(initialData)

  return (
    <NewTaskFormLayout sendLabel='Create Task' handleSubmit={handleSubmit}>
      <TextArea value={textareaValue} handleChange={handleTextArea} placeholder='Task' id={fields.title_task} name={fields.title_task} />

      <InputGroup label='Day' htmlFor={fields.date_day} className={styles.group_date_day}>
        <Select options={weekdays} id={fields.date_day} handleChange={handleSelectedDay} defaultValue={selectedDay} />
      </InputGroup>

      <InputGroup label='Hour' htmlFor={fields.date_hour} className={styles.group_date_hour}>
        <Time id={fields.date_hour} handleChange={handleSelectedHour} defaultValue={selectedHour} />
      </InputGroup>

      <InputGroup label='Recurrent' htmlFor={fields.recurrent} className={styles.group_recurrent}>
        <Checkbox id={fields.recurrent} />
      </InputGroup>

      <InputGroup label='Priority' htmlFor={fields.priority} className={styles.group_priority}>
        <Select options={priorityOptions} id={fields.priority} handleChange={handlePriority} defaultValue={selectedPriority} />
      </InputGroup>
    </NewTaskFormLayout>
  )
}
