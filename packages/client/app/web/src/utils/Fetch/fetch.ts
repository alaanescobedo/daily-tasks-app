import { BASE_URL } from '@setup/constants/api'

// const recoverToken = () => {
//   const token = window.localStorage.getItem('key_user')
//   if (token === null) return null
//   return JSON.parse(token)
// }

interface GetParams {
  endpoint: string
  headers?: HeadersInit
}
const get = async <T>({ endpoint, headers = {} }: GetParams): Promise<T> => {
  const requestOptions = {
    method: 'GET',
    headers
  }
  return await fetch(`${BASE_URL}${endpoint}`, requestOptions).then(handleResponse)
}

interface PostParams {
  endpoint: string
  body?: any
  headers?: HeadersInit
}
async function post<T> ({ endpoint, body, headers = {} }: PostParams): Promise<T> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body)
  }
  return await fetch(`${BASE_URL}${endpoint}`, requestOptions).then(handleResponse)
}

interface PatchParams {
  endpoint: string
  body: any
  headers?: HeadersInit
}
const patch = async <T>({ endpoint, body, headers = {} }: PatchParams): Promise<T> => {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body)
  }
  return await fetch(`${BASE_URL}${endpoint}`, requestOptions).then(handleResponse)
}

const handleResponse = async (response: any) => {
  const data = await response.json()
  if (response.error || !response.ok) {
    const error = data || response.statusText
    throw new Error(`${response.status}: ${error}`)
  }
  return data
}

const methods = {
  get,
  post,
  patch
}

export default methods
