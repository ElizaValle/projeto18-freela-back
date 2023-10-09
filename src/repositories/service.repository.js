import { db } from "../database/database.connection.js"

export function getAllServices() {
    return db.query(`SELECT * FROM services;`)
}

export function createServiceDB(photo, description, price) {
    return db.query(
        `INSERT INTO services (photo, description, price)
            VALUES ($1, $2, $3);`, 
        [photo,  description, price]
    )
}