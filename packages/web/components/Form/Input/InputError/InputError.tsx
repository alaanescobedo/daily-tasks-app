import { Typography } from '@components/Typography/Typography'
import { useInput } from '../InputField/Input.context'

export const InputError = (): JSX.Element | null => {
  const { id, error } = useInput()

  if (error === '') return null

  return (
    <Typography
      id={`${id}-error`}
      color='error'
      weight='bold'
      size='xs'
      style={{ position: 'absolute', top: '105%', bottom: '-25%', left: '1rem ' }}
    >
      {error}
    </Typography>
  )
}
