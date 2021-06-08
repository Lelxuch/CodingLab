const {FreelancerSkill} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");

class FreelancerSkillController {
    async create(req, res, next) {
        try{
            const {freelancerId, skillId} = req.body
            const freelancerSkill = await FreelancerSkill.create({freelancerId, skillId})
            return res.json(freelancerSkill)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try{
            const freelancerSkills = await FreelancerSkill.findAll()
            return res.json(freelancerSkills)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{
            const {id} = req.body
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            const freelancerSkill = await FreelancerSkill.destroy({where:{id,}})
            return res.json(freelancerSkill)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new FreelancerSkillController()