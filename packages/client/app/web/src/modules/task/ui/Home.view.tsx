import { NavLink } from 'react-router-dom'

import { Button, Dragger, ListTasks, MainCard, Scroll } from '@ui/components'
import { useUser } from '@modules/user/state'
import { getCurrentDate } from '@utils/getCurrentDate'

const currentDate = getCurrentDate().split(',').slice(0, 1).join(',')

export const HomeView = (): JSX.Element => {
  const { user } = useUser()

  return (
    <>
      <MainCard currentDate={currentDate} username={user.username} />
      <Dragger>
        <Scroll fullHeight>
          <ListTasks />
        </Scroll>
      </Dragger>
      <Button as={NavLink} to='/new-task' label='Add Task' />
    </>
  )
}
