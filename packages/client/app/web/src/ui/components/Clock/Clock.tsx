import { useTimer } from "@ui/utils/useTimer"

export const Clock = (): any => {
  useTimer()
  return (
    <div style={{ display: 'none' }}>Clock</div>
  )
}
