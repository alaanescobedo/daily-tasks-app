import { MainCard } from '../components'
import { Button } from '../components/Button/Button'
import { Tasks } from '../components/Scroll'

export const AppView = (): JSX.Element => {
  return (
    <>
      <MainCard />
      <Tasks />
      <Button />
    </>
  )
}
