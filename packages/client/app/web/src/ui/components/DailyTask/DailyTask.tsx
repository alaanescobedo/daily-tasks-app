import { Box } from '@components/Box'
import { DropArea } from '@components/DropArea/DropArea'
import { Stack } from '@components/Stack'
import { Typography } from '@components/Typography'
import { TaskI } from '@modules/task/task.interface'
import { DragEvent } from 'react'
import { useDragger } from '../Dragger'
import { Task } from '../Task'

const getWeekdayFromDate = (date: any) => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return weekdays[new Date(date).getDay()]
}

export const DailyTask = ({ day, tasks }: any) => {
  const { isDragging, item } = useDragger()

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (e: any) => {
    const taskId = e.dataTransfer.getData('text')
    const taskToUpdate = tasks.find((task: TaskI) => task.entityId === taskId)
    if (taskToUpdate === undefined) return

    const time = taskToUpdate.scheduledFor.split('T')[1]

    taskToUpdate.scheduledFor = `${day}T${time}`
    // updateTask(taskToUpdate)
  }


  return (
    <Box>
      <Box padding='.5rem 1rem' borderColor='secondary'>
        <Typography color='highlight' weight='bold'>
          {getWeekdayFromDate(day)} - {day}
        </Typography>
      </Box>
      <Stack vertical gap='.4rem' width='95%' onDrop={handleDrop} onDragOver={allowDrop}>
        {tasks.map((task: TaskI) => (
          <Task task={task} />
        ))}
        {isDragging && item !== day && <DropArea />}
      </Stack>
    </Box>
  )
}
