const {Freelancer} = require('../models/models')
const ApiError = require('../error/ApiError')

class FreelancerController {
    async create(req, res) {
        const {name} = req.body
        const freelancer = await Freelancer.create({name})
        return res.json(freelancer)
    }

    async getAll(req, res) {
        const Freelancers = await Freelancer.findAll()
        return res.json(Freelancers)
    }

    async getOne(req, res) {
        const {id} = req.params
        const freelancer = await Freelancer.findOne(
            {
                where: {id},

            },
        )
        return res.json(freelancer)
    }

    async delete(req, res) {

    }

}

module.exports = new FreelancerController()