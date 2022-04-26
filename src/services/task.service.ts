import { BASE_URL } from '@config/constants'

export const createTask = async ({ scheduledFor, title, userID }: any): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        scheduledFor,
        userID
      })
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
