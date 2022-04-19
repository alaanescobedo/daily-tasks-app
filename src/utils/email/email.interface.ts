import type { User } from '@user/userInterface'

export interface RenderData {
  user: User
  token: string
  template: 'welcome' | 'forgotPassword'
}
