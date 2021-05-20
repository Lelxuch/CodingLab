const uuid = require('uuid')
const path = require('path')
const {Job} = require('../models/models')
const ApiError = require('../error/ApiError')

class JobController {
    async create(req, res, next) {
        try {
            const {name, description, payment, hirerId} = req.body
            const {file} = req.files
            let fileName = uuid.v4() + ".docx"
            file.mv(path.resolve(__dirname, '..', 'static', fileName))

            const job = await Job.create({name, description, payment, hirerId, file: fileName})

            return res.json(job)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {name, hirerId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let jobs;
        if(!name && !hirerId) {
            jobs = await Job.findAndCountAll({limit, offset})
        }
        if(name && !hirerId) {
            jobs = await Job.findAndCountAll({where:{name}, limit, offset})
        }
        if(!name && hirerId) {
            jobs = await Job.findAndCountAll({where:{hirerId}, limit, offset})
        }
        if(name && hirerId) {
            jobs = await Job.findAndCountAll({where:{name, hirerId}, limit, offset})
        }
        return res.json(jobs)
    }


    async getOne(req, res) {
        const {id} = req.params
        const job = await Job.findOne(
            {
                where: {id},
            },
        )
        return res.json(job)
    }
}

module.exports = new JobController()