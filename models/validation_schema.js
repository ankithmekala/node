const joi = require('@hapi/joi')

const authSchema = joi.object({
    name: joi.string().min(8).lowercase().required(),
    email: joi.string().email().lowercase().required(),
    region: joi.string().lowercase().required(),
    aadhar: joi.string().min(12).required(),
    gender: joi.string().required(),
    subscribedToChannel: joi.string().min(8).required(),
})

module.exports = {
    authSchema
}