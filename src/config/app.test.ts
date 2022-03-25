import request from 'supertest'
import app from './app'

describe('Get /ping', () => {

  it('should return pong', async () => {
    const response = await request(app).get('/ping').send()
    expect(response.text).toBe('pong')
  })
})