import { useInput } from '../Input.context'

export const InputLabel = (): JSX.Element | null => {
  const { label, required } = useInput()

  if (label === '') return null

  return (
    <label>
      {label}
      {required && <span>*</span>}
    </label>
  )
}
