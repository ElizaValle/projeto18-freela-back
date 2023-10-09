import { db } from "../database/database.connection.js"

export function getUserByEmailDB(email) {
    return db.query(`SELECT * FROM users WHERE email=$1;`,  [email])
}

export function createUserDB(name, phone, stateId, cityId, email, password) {
    return db.query(
        `INSERT INTO users (name, phone, "stateId", "cityId", email, password)
            VALUES ($1, $2, $3, $4, $5, $6);`, 
        [name, phone, stateId, cityId, email, password]
    )
}