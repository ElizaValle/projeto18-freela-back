import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { authSchema } from "../schemas/auth.schema.js"
import { logout, signIn, signUp } from "../controllers/auth.controllers.js"
import { userSchema } from "../schemas/user.schemas.js"
import { validateSignUp } from "../middlewares/signup.middlewares.js"

const authRouter = Router()

authRouter.post("/signup", validateSchema(userSchema), validateSignUp, signUp)
authRouter.post("/", validateSchema(authSchema), signIn)
authRouter.post("/logout", logout)

export default authRouter