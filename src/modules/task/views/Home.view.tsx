import { useContext } from 'react'
import { MainCard, Button, ListTasks, Scroll } from '@components/index'
import { TaskContext } from '@context/Task'
import { getCurrentDate } from '@utils/getCurrentDate'
import { useUser } from 'modules/user/api/useUser'
import { NavLink } from 'react-router-dom'
import { DailyTaskViewerProvider } from '@components/DailyTask/DailyTaskViewer'

const currentDate = getCurrentDate().split(',').slice(0, 1).join(',')

export const HomeView = (): JSX.Element => {
  const { user } = useUser()

  return (
    <>
      <MainCard currentDate={currentDate} username={user.username} />
      <DailyTaskViewerProvider>
        <Scroll fullHeight>
          <ListTasks />
        </Scroll>
      </DailyTaskViewerProvider>
      <Button as={NavLink} to='/new-task' label='Add Task' />
    </>
  )
}
