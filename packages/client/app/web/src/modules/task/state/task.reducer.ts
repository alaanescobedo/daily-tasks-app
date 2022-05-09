import { TaskI } from "@modules/task/task.interface"

type TasksActionType =
  | { type: '[Task] Add', payload: TaskI }
  | { type: '[Task] ScheduledFor-Updated', payload: TaskI }

interface StateProps {
  tasks: TaskI[]
}

export const tasksReducer = (state: StateProps, action: TasksActionType) => {
  switch (action.type) {
    case '[Task] Add':
      return [...state.tasks, action.payload]
    case '[Task] ScheduledFor-Updated':
      return {
        ...state,
        tasks: state.tasks.map((task: any) => {
          if (task.id === action.payload.entityId) {
            task.scheduledFor = action.payload.scheduledFor
          }
          return task
        })
      }
    default:
      return state
  }
}
