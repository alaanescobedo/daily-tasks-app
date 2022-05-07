declare namespace Express {
  export interface Request {
    locals: {
      user: import('@user/userInterface').IUserEntity
      token: {
        id: string
        exp: number
      }
    }
  }
}
