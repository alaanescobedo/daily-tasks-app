import { fetch } from '@utils/Fetch'

const recoverToken = ({ key }: { key: string }) => {
  const token = window.localStorage.getItem(key)
  if (token === null) return null
  return JSON.parse(token)
}

export const createTask = async ({ scheduledFor, title, userID }: any): Promise<any> => {
  const res = await fetch.post({
    endpoint: '/tasks',
    body: {
      scheduledFor,
      title,
      userID
    },
    headers: {
      Authorization: `Bearer ${recoverToken({ key: 'key_user' })}`
    }
  })
  return res
}

// try {
//   const res = await fetch(`${BASE_URL}/tasks`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       title,
//       scheduledFor,
//       userID
//     })
//   })
//   return await res.json()
// } catch (error) {
//   console.log(error)
// }
