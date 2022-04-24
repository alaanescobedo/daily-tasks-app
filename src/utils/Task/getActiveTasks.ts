export const getActiveTasks = (tasks: any): any => {
  return Object.values(tasks).reduce((acc: any, currentTasks: any) => {
    if (currentTasks.length === 0) return acc

    const currentDate = new Date(currentTasks[0]?.scheduledFor).toISOString().split('T')[0]
    const activeTasks = currentTasks.filter((task: any) => task.status !== 'Outdated')

    if (activeTasks.length === 0) return acc

    acc[currentDate] = activeTasks
    return acc
  }, {})
}
