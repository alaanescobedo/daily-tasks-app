// TODO: Update types and interfaces and styles
import { forwardRef } from 'react'
import { useInput } from '../Input.context'

export const CheckboxBase = forwardRef(({ ...props }: any, ref: any) => {
  const { id, name } = useInput()

  return (
    <input
      id={id}
      name={name}
      type='checkbox'
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        margin: 0,
        opacity: 0,
        position: 'absolute',
        left: 0,
        top: 0
      }}
      {...props}
    />
  )
})
