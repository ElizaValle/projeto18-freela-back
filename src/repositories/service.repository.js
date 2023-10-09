import { db } from "../database/database.connection.js"

export function getAllServices() {
    return db.query(`SELECT * FROM services;`)
}

export function createServiceDB(photo, description, price, userId) {
    return db.query(
        `INSERT INTO services (photo, description, price, "userId")
            VALUES ($1, $2, $3, $4);`, 
        [photo,  description, price, userId]
    )
}