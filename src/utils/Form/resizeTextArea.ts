import { ChangeEvent } from 'react'

interface resizeTextareaProps {
  e: ChangeEvent<HTMLTextAreaElement>
}
export const resizeTextArea = ({ e }: resizeTextareaProps): void => {
  const textarea = e.target
  if (textarea.value.includes('\n')) return // We need this to avoid new lines bugs
  textarea.style.height = '2.6rem' // Is the same value as the height in the css
  if (textarea.scrollHeight < textarea.offsetHeight) return

  const scrollHeight = textarea.scrollHeight
  textarea.style.height = `${scrollHeight}px`
}
