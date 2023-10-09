import { db } from "../database/database.connection.js"

export function getAllServices() {
    return db.query(`SELECT * FROM services;`)
}

export function createServiceDB(userId, photo, description, price) {
    return db.query(
        `INSERT INTO services ("userId", photo, description, price)
            VALUES ($1, $2, $3, $4);`, 
        [userId, photo,  description, price]
    )
}