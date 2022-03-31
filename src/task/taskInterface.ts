export interface TaskClientData {
  title: string
  scheduledFor: string
  description?: string
}

export interface Task extends TaskClientData {
  status: 'Pending' | 'Completed' | 'In-Progress'
  userID: string
  createdAt: string
  completedAt?: string
  updatedAt?: string
}
export interface TaskEntity extends Task {
  entityId: string
}
