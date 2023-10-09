import { db } from "../database/database.connection.js"

export async function validateSignUp(req, res, next) {
    const { email } = req.body

    try {
        const existUser = await db.query(`SELECT email FROM users WHERE email=$1;`, [email])
        if (existUser.rowCount !== 0) return res.status(409).send({message: 'Email já cadastrado!'})

    } catch (err) {
        res.status(500).send(err.message)
    }

    next()
}