const {Hirer} = require('../models/models')
const ApiError = require('../error/ApiError')

class HirerController {
    async create(req, res) {
        const {name} = req.body
        const hirer = await Hirer.create({name})
        return res.json(hirer)
    }

    async getAll(req, res) {
        const hirers = await Hirer.findAll()
        return res.json(hirers)
    }


    async getOne(req, res) {

    }
}

module.exports = new HirerController()