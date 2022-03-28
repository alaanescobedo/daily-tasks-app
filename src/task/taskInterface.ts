export interface TaskClientData {
  title: string
  scheduledFor: string
  description?: string | null
}

export interface Task extends TaskClientData {
  status: string
  createdAt: string
  completedAt?: string
  updatedAt?: string
}
