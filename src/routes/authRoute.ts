import { AuthController } from "../controllers/authController"
import { Request, Response } from "express"

export class Routes {
  public authController: AuthController = new AuthController()

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!"
      })
    })
  }
}
