import { Typography } from '@components/Typography/Typography'
import { useInput } from '../InputField/Input.context'

export const InputHint = ({ keepHint }: any): JSX.Element | null => {
  const { id, hint, error, size = 'sm' } = useInput()

  if ((hint === '') || (error && error?.length > 0) && (keepHint === false)) return null

  const sizes = {
    sm: 'xs',
    md: 'sm',
    lg: 'base'
  } as const

  return (
    <Typography htmlFor={id} variant='label' id={`${id}-hint`} weight='bold' size={sizes[size]}>{hint}</Typography>
  )
}
