const {Work} = require('../models/models')
const ApiError = require('../error/ApiError')

class WorkController {
    async create(req, res) {
        const {name} = req.body
        const work = await Work.create({name})
        return res.json(work)
    }

    async getAll(req, res) {
        const works = await Work.findAll()
        return res.json(works)
    }

    async getOne(req, res) {
        const {id} = req.params
        const work = await Work.findOne(
            {
                where: {id},

            },
        )
        return res.json(work)
    }

    async edit(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new WorkController()