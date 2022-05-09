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