import { NEW_TASK_INPUT_CONFIG } from 'modules/task/config/new-task.config'
import { CheckboxField, SelectField, TextAreaField, TimeField } from '@components/Form'
import { getSevenDays } from '@utils/getSevenDays'
import { getCurrentDate } from '@utils/getCurrentDate'
import { useController, useForm } from 'react-hook-form'
import { Form } from '@components/Form/Form'
import { Typography } from '@components/Typography/Typography'
import { Button } from '@components/Button'
import { WeekdaysId, WeekdaysLabel } from '@components/Form/Select/BaseSelect/SelectBase'
import { getCurrentTimePlus5minutes } from '@utils/getCurrentTimePlus5minutes'
import { Grid } from '@components/Grid/Grid'
import { yupResolver } from '@hookform/resolvers/yup'
import newTaskSchema from '@utils/Form/validations/new-task.schema'
import { Alert } from '@components/Alert/Alert'
import { objectValues } from '@utils/Typescript/values'
import { useUser } from 'modules/user/api/useUser'
import { Container } from 'layouts/Container/Container'
import { Stack } from '@components/Stack'
import { useTasks } from '@hooks'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { createTask } from '../api/task.service'

export const setInStorage = ({ key, value }: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}
const weekdays = getSevenDays() as Array<{ id: WeekdaysId, label: WeekdaysLabel }>

const fields = NEW_TASK_INPUT_CONFIG
type FormInputs = {
  [key in keyof typeof fields]: string
}

const minTime = getCurrentDate().split(',')[2].split(':').slice(0, 2).join(':').trim()
const currentDate = getCurrentDate().split(',')[1].trim()

export const NewTaskView = (): JSX.Element => {
  const { register, handleSubmit, control, formState: { errors, isSubmitting, isSubmitSuccessful, submitCount }, resetField } = useForm<FormInputs>({
    resolver: yupResolver(newTaskSchema)
  })
  const { field: { value: titleValue = '' }, fieldState: { isDirty: isDirtyTitle } } = useController({ name: 'title', control })
  const { field: { value: dayValue = currentDate } } = useController({ name: 'day', control })

  const { user, isAuthenticated } = useUser()
  const { saveNewTask } = useTasks()

  const handleSubmitForm = async (data: any): Promise<void> => {
    const scheduledFor = new Date(`${data.day}, ${data.hour}`).toISOString()

    let newTask = {}

    if (isAuthenticated) {
      newTask = await createTask({
        scheduledFor,
        title: data.title,
        userID: user.entityId
      })
    } else {
      newTask = {
        scheduledFor,
        title: data.title,
        userID: user.entityId,
        entityId: uuidv4(),
        status: 'Pending'
      }
    }
    saveNewTask(newTask)
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      resetField('title')
    }
  }, [submitCount])

  return (
    <>
      <Container color='secondary' fullHeight>
        <Stack vertical fullHeight>

          <Typography center variant='h1' size='2xl' weight='bold' color='highlight'>
            New Task
          </Typography>

          {objectValues(errors).map((error: any, key: number) => (
            <Alert key={key} status='error' message={error.message} />
          ))}

          {isSubmitting && <Alert status='info' message='Creating new task...' />}
          {isSubmitSuccessful && !isDirtyTitle && <Alert status='success' message='Task created!' />}

          <Form id='newTask' title='New Task' onSubmit={handleSubmit(handleSubmitForm)} contents>
            <Stack vertical fullHeight justify='between'>
              <Grid columns={12} gap='1rem'>
                <GridItem>
                  <TextAreaField
                    {...register('title')}
                    id={fields.title.id}
                    value={titleValue}
                    maxLength={fields.title.maxLength}
                    required={fields.title.required}
                    error={errors.title?.message}
                    hidenErrorField
                    keepHint
                    size='md'
                    hint={`${fields.title.maxLength - titleValue.length} characters left`}
                    resize
                  />
                </GridItem>

                <GridItem gridColumn='4/9'>
                  <SelectField
                    {...register('day')}
                    id={fields.day.id}
                    options={weekdays}
                    label={fields.day.label}
                    required={fields.day.required}
                    defaultValue={dayValue}
                    error={errors.day?.message}
                    hideErrorField
                    align='end'
                    size='md'
                    labelPosition='bottom'
                    vertical
                  />

                </GridItem>

                <GridItem gridColumn='9/-1'>
                  <TimeField
                    {...register('hour')}
                    minTime={dayValue === currentDate ? minTime : '00:00'}
                    defaultValue={getCurrentTimePlus5minutes()}
                    label={fields.hour.label}
                    id={fields.hour.id}
                    required={fields.hour.required}
                    error={errors.hour?.message}
                    hideErrorField
                    align='end'
                    size='md'
                    labelPosition='bottom'
                    vertical
                  />
                </GridItem>

                <GridItem>
                  <CheckboxField
                    {...register('recurrent')}
                    id={fields.recurrent.id}
                    required={fields.recurrent.required}
                    align='end'
                    labelPosition='bottom'
                    error={errors.recurrent?.message}
                    hideErrorField
                    size='md'
                    label='Recurrent'
                    vertical
                  />
                </GridItem>

                <GridItem gridColumn='8/-1'>
                  <SelectField
                    {...register('priority')}
                    id={fields.priority.id}
                    options={fields.priority.options}
                    label={fields.priority.label}
                    error={errors.priority?.message}
                    required={fields.priority.required}
                    size='md'
                    align='end'
                    hideErrorField
                    labelPosition='bottom'
                    vertical
                  />
                </GridItem>
              </Grid>
              <Button type='submit' label='Create New Task' />
            </Stack>
          </Form>
        </Stack>
      </Container>
    </>
  )
}
