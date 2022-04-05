import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { AppContainerLayout } from '../../../layouts/AppContainerLayout'
import { getCurrentDate } from '../../../utils/getCurrentDate'
import styles from './NewTask.module.css'

const CheckIcon = (): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' />
  </svg>
)

const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const NewTask = (): JSX.Element => {
  const [textValue, setTextValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [weekDays, setWeekDays] = useState([] as string[])

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  useEffect(() => {
    const currentDay = getCurrentDate().split(',')[0]
    const indexOfDay = weekDaysArr.indexOf(currentDay)
    const sortedWeekDays = ['Today', 'Tomorrow'].concat(weekDaysArr.slice(indexOfDay + 2)).concat(weekDaysArr.slice(0, indexOfDay))

    setWeekDays(sortedWeekDays)
  }, [])

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const textarea = e.currentTarget

    if (textarea.value.includes('\n')) return

    textarea.style.height = '2.6rem'
    setTextValue(textarea.value)

    if (textarea.scrollHeight < textarea.offsetHeight) return

    const scrollHeight = e.currentTarget.scrollHeight
    e.currentTarget.style.height = `${scrollHeight}px`
  }

  const handleCheckbox = (e: any): void => {
    setChecked(!checked)
  }

  return (
    <AppContainerLayout>
      <h1 className={styles.heading}>New task</h1>
      <form className={styles.form} onSubmit={handleSubmit}>

        <textarea
          onChange={handleTextArea}
          className={styles.input_task}
          placeholder='Task'
          maxLength={70}
          value={textValue}
        />

        <div className={styles.group_date_day}>
          <select name='date_day' id='date_day' className={styles.input_date_day} onChange={handleSelectChange}>
            {weekDays.map((day, index) => (
              <option key={index} value={index + 1}>{day}</option>
            ))}
          </select>
          <label htmlFor='date_day'>Day</label>
        </div>

        <div className={styles.group_date_hour}>
          <input name='date_hour' id='date_hour' type='time' className={styles.input_date_hour} />
          <label htmlFor='date_hour'>Hour</label>
        </div>

        <div className={styles.group_recurrent}>
          <span className={styles.input_recurrent} onClick={handleCheckbox}>
            {checked ? <CheckIcon /> : ''}
            <input name='recurrent' id='recurrent' type='checkbox' className={styles.checkbox} checked={checked} readOnly />
          </span>
          <label htmlFor='recurrent'>Recurrent</label>
        </div>

        <div className={styles.group_priority}>
          <select name='priority' id='priority' className={styles.input_priority} defaultValue='high'>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
          <label htmlFor='priority'>Priority</label>
        </div>

        <button className={styles.input_submit}>Create</button>
      </form>
    </AppContainerLayout>
  )
}
