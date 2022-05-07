export const BASE_URL: string = process.env.NODE_ENV === 'production'
  ? 'https://my-awesome-api.com/api/v1'
  : 'http://localhost:3300/api/v1'
