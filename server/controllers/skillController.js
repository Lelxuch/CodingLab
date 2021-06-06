const {Skill} = require('../models/models')
const ApiError = require('../error/ApiError')

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

    async delete(req, res) {

    }
}

module.exports = new SkillController()