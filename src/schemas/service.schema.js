import joi from "joi"

export const serviceSchema = joi.object({
    photo: joi.string().uri().required(),
    description: joi.string().required(), 
    price: joi.string().required() 
})