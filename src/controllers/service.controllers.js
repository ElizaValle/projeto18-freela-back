import { createServiceDB, getAllServices } from "../repositories/service.repository.js"

export async function postService(req, res) {
    const { authorization } = req.headers
    const { photo, description, price } = req.body

    try {
        // isso não deve dar certo, implementar algo para validar o token
        if (!isValidToken(authorization)) return res.status(401).send({ message: "Token de autorização inválido." })
        
        await createServiceDB(photo, description, price)

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getServices(req, res) {
    try {
        res.send(await getAllServices())

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getServiceById(req, res) {
    res.send("getServiceById")
}

export async function deleteServiceById(req, res) {
    res.send("deleteServiceById")
}