import { useContext } from 'react'
import { TaskContext } from '@context/Task'

export interface TaskI {
  title: string
  scheduledFor: string
  description?: string
  status: 'Pending' | 'Completed' | 'In-Progress' | 'Outdated'
  userID: string
  createdAt: string
  completedAt?: string
  updatedAt?: string
  entityId: string
}

export const useTasks = (): any => useContext(TaskContext)
