import { CSSProperties } from "react"

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  display?: 'flex' | 'inline-flex'
  flexDirection?: CSSProperties['flexDirection']
  gap?: CSSProperties['gap']
  flex?: CSSProperties['flex']
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  alignContent?: CSSProperties['alignContent']
  alignSelf?: CSSProperties['alignSelf']
  justifySelf?: CSSProperties['justifySelf']
}

export const Flex = ({
  children,
  display = 'flex',
  flexDirection = 'row',
  gap = '0',
  flex = '1 1 auto',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  alignContent = 'stretch',
  alignSelf = 'auto',
  justifySelf = 'auto',
  ...props
}: FlexProps) => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        justifySelf: 'center'
      }}
      {...props}
    >
      {children}
    </div>
  )
}
