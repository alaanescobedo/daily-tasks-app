interface FormProps {
  children: React.ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  title: string
  contents?: boolean
  id: string
}

export const Form = ({ children, title, onSubmit, contents, id }: FormProps): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSubmit(event)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  return (
    <form onSubmit={handleSubmit} title={title} id={id} onKeyPress={handleKeyPress} style={{ display: contents === true ? 'contents' : 'block' }}>
      {children}
    </form>
  )
}
