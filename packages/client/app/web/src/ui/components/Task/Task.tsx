import { Box } from '@components/Box'
import { Stack } from '@components/Stack'
import { Typography } from '@components/Typography'
import { DragEvent } from 'react'
import { useDragger } from '../Dragger'

export const Task = ({ task }: any) => {
  const { handleSetIsDragging, handleSetItem } = useDragger()

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', task.entityId)

    // We need this setTimeOut to prevent the onDragEnd from being called instantly due to layout movement
    setTimeout(() => {
      handleSetIsDragging(true)
      handleSetItem(task.entityId)
    }, 50)
  }

  const handleDragEnd = (e: any) => {
    handleSetIsDragging(false)
    handleSetItem('')
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
