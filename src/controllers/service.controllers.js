import { createServiceDB, getAllServices } from "../repositories/service.repository.js"

export async function postService(req, res) {
    const { photo, description, price } = req.body
    const { userId } = res.local

    try {
        const service = await createServiceDB(userId, photo, description, price)

        res.status(201).send(service)

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