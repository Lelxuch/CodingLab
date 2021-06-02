const uuid = require('uuid')
const path = require('path')
const {Job, JobInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class JobController {
    async create(req, res, next) {
        try {
            let {name, description, payment, userId, categoryId, info} = req.body
            const {file} = req.files
            let fileName = uuid.v4() + ".docx"
            file.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    JobInfo.create({
                        title: i.title,
                        description: i.description,
                        jobId: job.id
                    })
                )
            }

            const job = await Job.create({name, description, payment, userId, categoryId, file: fileName})

            return res.json(job)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {userId, categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let jobs;
        if(!userId && !categoryId) {
            jobs = await Job.findAndCountAll({limit, offset})
        }
        if(userId && !categoryId) {
            jobs = await Job.findAndCountAll({where:{userId}, limit, offset})
        }
        if(!userId && categoryId) {
            jobs = await Job.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if(userId && categoryId) {
            jobs = await Job.findAndCountAll({where:{userId, categoryId}, limit, offset})
        }
        return res.json(jobs)
    }


    async getOne(req, res) {
        const {id} = req.params
        const job = await Job.findOne(
            {
                where: {id},
                include: [{model: JobInfo, as: 'info'}]
            },
        )
        return res.json(job)
    }
}

module.exports = new JobController()