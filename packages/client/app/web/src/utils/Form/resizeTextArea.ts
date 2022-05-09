interface resizeTextareaProps {
  e: React.ChangeEvent<HTMLTextAreaElement>
  initialHeight?: string
}
export const resizeTextArea = ({ e, initialHeight = '2.6rem' }: resizeTextareaProps): void => {
  const textarea = e.target
  // if (textarea.value.includes('\n')) return // We need this to avoid new lines bugs // Posible remove
  textarea.style.height = initialHeight // Is the same value as the height in the css
  if (textarea.scrollHeight < textarea.offsetHeight) return

  const scrollHeight = textarea.scrollHeight
  textarea.style.height = `${scrollHeight}px`
}
