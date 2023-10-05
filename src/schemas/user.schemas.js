import joi from "joi"

export const userSchema = joi.object({
    name: joi.string().trim().required(),
    phone: joi.string().regex(/^\d{11}$/).required(),
    states: joi.string().required(),
    city: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).required(),
    confirmPassword: joi.string().min(3).required().valid(joi.ref("password"))
})