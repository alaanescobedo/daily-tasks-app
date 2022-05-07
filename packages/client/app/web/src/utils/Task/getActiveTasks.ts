export const getActiveTasks = (tasks: any): any => {
  return tasks.filter((task: any) => task.status !== 'Outdated')
}
