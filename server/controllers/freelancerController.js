const {Freelancer} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')

class FreelancerController {
    async create(req, res, next) {
        try{
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            const {github, linkedin} = req.body
            const freelancer = await Freelancer.create({github, linkedin, userId: decoded.id})
            return res.json(freelancer)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try{
            const freelancers = await Freelancer.findAll()
            return res.json(freelancers)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try{
            const {id} = req.params
            const freelancer = await Freelancer.findOne(
                {
                    where: {id},
                },
            )
            return res.json(freelancer)
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
            const freelancer = await Freelancer.destroy({where:{userId: decoded.id},})
            return res.json(freelancer)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new FreelancerController()