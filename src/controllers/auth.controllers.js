import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"

export async function signUp(req, res) {
    const { name, phone, states, city, email, password } = req.body

    try {
        const user = await db.query(`SELECT * FROM users WHERE email=$1;`,  [email])
        if (user.rowCount > 0) return res.status(409).send({ message: "Email já cadastrado!" })

        const passwordHash = bcrypt.hashSync(password, 10)

        await db.query(`
            INSERT INTO users (name, phone, states, city, email, password)
                VALUES ($1, $2, $3, $4, $5, $6);
        `, [name, phone, states, city, email, passwordHash])

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    } 
}

export async function signIn(req, res) {
    res.send("signin")
}

export async function logout(req, res) {
    res.send("logout")
}