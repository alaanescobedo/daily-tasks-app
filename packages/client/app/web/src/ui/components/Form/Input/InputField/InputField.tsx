import InputContext, { InputContextProps } from './Input.context'

interface InputFieldProps extends InputContextProps {
  children: React.ReactNode
}

const InputField = ({ children, name, id, error, hint, required, size, ...props }: InputFieldProps): JSX.Element => {
  return (
    <div style={{ width: '100%' }} {...props}>
      <InputContext.Provider value={{ name, id, error, hint, size }}>
        {children}
      </InputContext.Provider>
    </div>
  )
}

export default InputField
