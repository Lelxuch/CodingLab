const uuid = require('uuid')
const path = require('path')
const {Job, JobInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class JobController {
    async create(req, res, next) {

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

            },
        )
        return res.json(job)
    }

    async getStatus(req, res) {

    }

    async changeStatus(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new JobController()