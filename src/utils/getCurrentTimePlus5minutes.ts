import { getCurrentDate } from './getCurrentDate'

export const getCurrentTimePlus5minutes = (): any => {
  return getCurrentDate('en-US', Date.now() + 5 * 1000 * 60).split(',')[2].split(':').slice(0, 2).join(':').trim()
}
