const {Hirer} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')

class HirerController {
    async create(req, res, next) {
        try{
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            const {github, linkedin} = req.body
            const hirer = await Hirer.create({github, linkedin, userId: decoded.id})
            return res.json(hirer)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try{
            const hirers = await Hirer.findAll()
            return res.json(hirers)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try{
            const {id} = req.params
            const hirer = await Hirer.findOne(
                {
                    where: {id},
                },
            )
            return res.json(hirer)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            const hirer = await Hirer.destroy({where:{userId: decoded.id},})
            return res.json(hirer)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new HirerController()