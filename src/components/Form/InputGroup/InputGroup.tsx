interface Props {
  children: React.ReactNode
  label: string
  htmlFor: string
  className?: string
}

export const InputGroup = ({ children, label, htmlFor, className }: Props): JSX.Element => {
  return (
    <div className={className}>
      {children}
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  )
}
