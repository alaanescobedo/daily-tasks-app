import { useTimer } from '@hooks'

export const Clock = (): any => {
  useTimer()
  return (
    <div style={{ display: 'none' }}>Clock</div>
  )
}
