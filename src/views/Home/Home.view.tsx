import { useContext } from 'react'
import { MainCard } from '../../components'
import { Button } from '../../components/Button/Button'
import { ListTasks } from '../../components/List/ListTasks'
import { Scroll } from '../../components/Scroll/Scroll'
import { TaskContext } from '../../context/Task/Task.context'

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
