import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { serviceSchema } from "../schemas/service.schema.js"
import { deleteServiceById, getService, getServiceById, postService } from "../controllers/service.controllers.js"

const serviceRouter = Router()

serviceRouter.post("/service", validateSchema(serviceSchema), postService)
serviceRouter.get("/service", getService)
serviceRouter.get("/service/:id", getServiceById)
serviceRouter.delete("/service/:id", deleteServiceById)

export default serviceRouter