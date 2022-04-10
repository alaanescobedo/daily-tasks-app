import { useTimer } from '../../hooks/useTimer'

export const Clock = (): any => {
  useTimer()
  return (
    <div style={{ display: 'none' }}>Clock</div>
  )
}
