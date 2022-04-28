import InputContext, { InputContextProps } from '../Input.context'

interface InputFieldProps extends InputContextProps {
  children: React.ReactNode
}

const InputField = ({ children, name, id, error, hint, label, required }: InputFieldProps): JSX.Element => {
  return (
    <InputContext.Provider value={{ name, id, error, hint, label, required }}>
      {children}
    </InputContext.Provider>
  )
}

export default InputField
