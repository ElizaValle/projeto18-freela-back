import { Router } from "express"
import authRouter from "./auth.routes.js"
import userRouter from "./user.routes.js"
import serviceRouter from "./service.routes.js"

const router = Router()

router.use(authRouter)
router.use(userRouter)
router.use(serviceRouter)

export default router