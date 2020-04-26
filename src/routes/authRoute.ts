import { AuthController } from "../controllers/authController"

export class Routes {
  public authController: AuthController = new AuthController()

  public routes(app): void {
    app.route("/auth").post(this.authController.authenticate)
  }
}
