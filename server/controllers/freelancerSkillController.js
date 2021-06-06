const {FreelancerSkill} = require('../models/models')
const ApiError = require('../error/ApiError')

class FreelancerSkillController {
    async create(req, res) {
        const {name} = req.body
        const freelancerSkill = await FreelancerSkill.create({name})
        return res.json(freelancerSkill)
    }

    async getAll(req, res) {
        const freelancerSkills = await FreelancerSkill.findAll()
        return res.json(freelancerSkills)
    }

    async delete(req, res) {

    }
}

module.exports = new FreelancerSkillController()