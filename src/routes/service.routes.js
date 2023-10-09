import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { serviceSchema } from "../schemas/service.schema.js"
import { deleteServiceById, getServiceById, getServices, postService } from "../controllers/service.controllers.js"
import { validateAuth } from "../middlewares/validateAuth.js"

const serviceRouter = Router()

serviceRouter.post("/service", validateSchema(serviceSchema), validateAuth, postService)
serviceRouter.get("/service", getServices)
serviceRouter.get("/service/:id", getServiceById)
serviceRouter.delete("/service/:id", deleteServiceById)

export default serviceRouter