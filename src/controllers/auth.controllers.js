import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { createUserDB, getUserByEmailDB } from "../repositories/user.repository.js"
import { createSessionDB } from "../repositories/auth.repository.js"

export async function signUp(req, res) {
    const { name, phone, stateId, cityId, email, password } = req.body

    try {
        const user = await getUserByEmailDB(email)
        if (user.rowCount > 0) return res.status(409).send({ message: "Email já cadastrado!" })

        const passwordHash = bcrypt.hashSync(password, 10)

        await createUserDB(name, phone, stateId, cityId, email, passwordHash)

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    } 
}

export async function signIn(req, res) {
    const { email, password } = req.body

    try {
        const user = await getUserByEmailDB(email)
        if (user.rowCount === 0) return res.status(401).send({ message: "Email já cadastrado!" })

        const isPasswordCorrect = bcrypt.compare(password, user.rows[0].password)
        if (!isPasswordCorrect) return res.status(401).send({ message: "Senha incorreta!" })

        const token = uuid()
        await createSessionDB(user.rows[0].id, token)

        res.send({ token })

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function logout(req, res) {
    res.send("logout")
}