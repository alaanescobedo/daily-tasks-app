import { Input_Base } from '@interfaces'

export interface InputProps extends Input_Base {}

export const Input = ({ type, id, handleChange, required = false }: InputProps): JSX.Element => {
  return (
    <input type={type} id={id} name={id} autoComplete='off' onChange={handleChange} required={required} />
  )
}
