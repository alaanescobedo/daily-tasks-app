import { AppContainerLayout } from './AppContainerLayout'
import styles from './NewTaskFormLayout.module.css'

interface Props {
  children: React.ReactNode
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  title?: string
  sendLabel?: string
}

export const NewTaskFormLayout = ({ children, handleSubmit, title = 'New Task', sendLabel = 'Send' }: Props): JSX.Element => {
  return (
    <AppContainerLayout>
      <h1 className={styles.heading}>{title}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {children}
        <button type='submit' className={styles.input_submit}>{sendLabel}</button>
      </form>
    </AppContainerLayout>
  )
}
