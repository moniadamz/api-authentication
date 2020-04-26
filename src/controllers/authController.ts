import * as jwt from "jsonwebtoken"
import { Request, Response } from "express"

export class AuthController {
  constructor() {}

  async authenticate(req: Request, res: Response) {
    const { user, password } = req.body

    if (user !== process.env.USER || password !== process.env.PASSWORD) {
      res.send({ message: "User or password invalid." })
    }
    res.send({
      token: jwt.sign({ user, password }, process.env.SECRET, {
        expiresIn: 86400
      })
    })
  }
}
