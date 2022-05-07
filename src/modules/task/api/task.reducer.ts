import { TaskI } from '@hooks'

type TasksActionType =
  | { type: '[Task] Add', payload: TaskI }
  | { type: '[Task] ScheduledFor-Updated', payload: TaskI }

export const tasksReducer = (state = [], action: TasksActionType) => {
  switch (action.type) {
    case '[Task] Add':
      return [...state, action.payload]
    case '[Task] ScheduledFor-Updated':
      return {
        ...state,
        tasks: state.tasks.map((task: any) => {
          if (task.id === action.payload.id) {
            task.scheduledFor = action.payload.scheduledFor
          }
          return task
        })
      }
    default:
      return state
  }
}
