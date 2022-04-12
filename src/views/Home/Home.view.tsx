import { useContext } from 'react'
import { MainCard, Button, ListTasks, Scroll } from '@components/index'
import { TaskContext } from '@context/Task'

export const AppView = (): JSX.Element => {
  const { tasks } = useContext(TaskContext)
  return (
    <>
      <MainCard />
      <main style={{ flex: '1' }}>
        <Scroll>
          <ListTasks tasks={tasks} />
        </Scroll>
      </main>
      <Button />
    </>
  )
}
