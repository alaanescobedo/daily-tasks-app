export const Flex = ({ children }: any) => {
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
    >
      {children}
    </div>
  )
}
