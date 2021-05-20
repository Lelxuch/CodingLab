const {Freelancer} = require('../models/models')
const ApiError = require('../error/ApiError')

class FreelancerController {
    async create(req, res) {
        const {name} = req.body
        const freelancer = await Freelancer.create({name})
        return res.json(freelancer)
    }

    async getAll(req, res) {
        const freelancers = await Freelancer.findAll()
        return res.json(freelancers)
    }


    async getOne(req, res) {

    }
}

module.exports = new FreelancerController()
