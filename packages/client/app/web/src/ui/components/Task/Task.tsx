import { Box } from '@components/Box'
import { useDailyTaskViewer } from '@ui/components/DailyTask/Dragger.provider'
import { Stack } from '@components/Stack'
import { Typography } from '@components/Typography'
import { DragEvent } from 'react'

export const Task = ({ task }: any) => {
  const { handleSetIsDragging, handleSetSelectedDay } = useDailyTaskViewer()

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', task.entityId)

    // We need this setTimeOut to prevent the onDragEnd from being called instantly due to layout movement
    setTimeout(() => {
      handleSetIsDragging(true)
      handleSetSelectedDay(task.entityId)
    }, 50)
  }

  const handleDragEnd = (e: any) => {
    handleSetIsDragging(false)
    handleSetSelectedDay('')
  }

  return (
    <Box padding='.5rem 1rem' borderColor='tertiary' draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Stack noWrap justify='between'>
        <Typography textSelect={false}>
          - {task.title}
        </Typography>
      </Stack>
    </Box>
  )
}
