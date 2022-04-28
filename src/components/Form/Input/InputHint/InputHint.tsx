import { Typography } from '@components/Typography/Typography'
import { useInput } from '../Input.context'

export const InputHint = (): JSX.Element | null => {
  const { id, hint, error } = useInput()

  if (hint === '' || error.length > 0) return null

  return (
    <Typography id={`${id}-hint`} weight='bold' size='xs'>{hint}</Typography>
  )
}
