const {Skill} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");

class SkillController {
    async create(req, res) {
        const {name} = req.body
        const skill = await Skill.create({name})
        return res.json(skill)
    }

    async getAll(req, res) {
        const skills = await Skill.findAll()
        return res.json(skills)
    }

    async delete(req, res, next) {
        try{
            const {id} = req.body
            const skill = await Skill.destroy({where:{id,}})
            return res.json(skill)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new SkillController()