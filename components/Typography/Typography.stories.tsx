import { ComponentStory, ComponentMeta } from '@storybook/react'
import { objectKeys } from '@utils/Typescript/values'

import { Typography, variantsMap, colorsMap, sizeMap, weightMap } from './Typography'

const TypographyStory: ComponentMeta<typeof Typography> = {
  title: 'Typography',
  component: Typography
}
export default TypographyStory

export const Base: ComponentStory<typeof Typography> = (args) => <Typography {...args} />
Base.args = { children: 'This is my message' }

export const Variants = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      {objectKeys(variantsMap).map((variant) => (
        <Typography key={variant} variant={variant}>
          This is my {variant} message
        </Typography>
      ))}
    </li>
  </>
)
export const Colors = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      {objectKeys(colorsMap).map((color) => (
        <Typography key={color} color={color}>
          This is my {color} message
        </Typography>
      ))}
    </li>
  </>
)
export const Sizes = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      {objectKeys(sizeMap).map((size) => (
        <Typography key={size} size={size}>
          This is my {size} message
        </Typography>
      ))}
    </li>
  </>
)
export const Weight = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      {objectKeys(weightMap).map((weight) => (
        <Typography key={weight} weight={weight}>
          This is my {weight} message
        </Typography>
      ))}
    </li>
  </>
)
