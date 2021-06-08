const uuid = require('uuid')
const path = require('path')
const {Job} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");

class JobController {
    async create(req, res, next) {
        try{
            const {projectId, freelancerId} = req.body
            const job = await Job.create({projectId, freelancerId})
            return res.json(job)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try{
            let {status, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let jobs;
            if (!status) {
                jobs = await Job.findAndCountAll({limit, offset})
            }
            if (status) {
                jobs = await Job.findAndCountAll({where: {status}, limit, offset})
            }

            return res.json(jobs)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }


    async getOne(req, res, next) {
        try{
            const {id} = req.params
            const job = await Job.findOne(
                {
                    where: {id},
                },
            )
            return res.json(job)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getStatus(req, res, next) {
        try{
            const {id} = req.params
            const job = await Job.findOne(
                {
                    where: {id},
                },
            )
            return res.json(job)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async changeStatus(req, res, next) {
        try{
            const {status, id} = req.body
            if (!status) {
                return next(ApiError.badRequest('Некорректный ввод'))
            }

            const job = await Job.update(
                {status: status},
                {returning: true, where: {id}}
            )

            return res.json({job})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{
            const {id} = req.body
            const job = await Job.destroy({where:{id},})
            return res.json(job)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new JobController()